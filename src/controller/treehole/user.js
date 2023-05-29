const Base = require('../base.js');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { createToken, verifyToken } = require('./utils/token.js');

const sendEmail = (email) => {
  // 创建一个邮件发送器
  const transporter = nodemailer.createTransport({
    service: 'QQ', // 邮件服务商
    auth: {
      user: 'wjc1173943332@qq.com', // 发件人邮箱账号
      pass: 'bxiqqkihbbpphehb' // 发件人邮箱授权码
    }
  });
  transporter.use('compile', htmlToText());
  // 发送邮件验证码
  const sendVerificationCode = async(to) => {
    const code = Math.floor(Math.random() * 900000) + 100000; // 生成随机验证码
    const mailOptions = {
      from: 'wjc1173943332@qq.com', // 发件人邮箱
      to, // 收件人邮箱
      subject: '树洞验证码', // 邮件主题
      html: `
      <div style="background-color: green;color: #f2f2f2; font-size: 30px;width: 100%;height: 50px;text-align: center;line-height: 50px;">树洞</div>
      <div style="font-size: 12px;color: rgb(65, 60, 60);">你的验证码是<span style="color: red;font-size: 20px;">${code}</span></div>
      <div>有效期 五分钟</div>
     ` // 邮件内容
    };
    await transporter.sendMail(mailOptions); // 发送邮件
    return code;
  };

  return new Promise((resolve, reject) => {
    // 调用发送邮件验证码函数
    sendVerificationCode(email)
      .then((code) => {
        resolve({
          status: 0,
          code: code
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
// 存入邮箱和验证码
const saveCode = async(email, code, model, that) => {
  // 查询是否有相同邮箱数据
  const findData = await model.where({ email }).find();
  if (think.isEmpty(findData)) {
    // 如果没有 则添加
    await model.add({ EMAIL: email, CODE: code });
  } else {
    // 如果有 删除原来的  再去添加
    await model.where({ email }).delete();
    await model.add({ EMAIL: email, CODE: code });
  }
};

module.exports = class extends Base {
  async __before() {

  }
  // 判断是否账号唯一
  async isAccountOnlyAction() {
    const { account } = this.post();
    // 用拿到的账号查询数据库是否有重复
    const model = this.model('User');
    const findData = await model.where({ account }).find();
    return this.success(think.isEmpty(findData));
  }
  // 判断邮箱是否使用
  async isEmailOnlyAction() {
    const { email } = this.post();
    // 用拿到的账号查询数据库是否有重复
    const model = this.model('User');
    const findData = await model.where({ email }).find();
    return this.success(think.isEmpty(findData));
  }
  // 发送验证码
  async sendAuthCodeAction() {
    const { email } = this.post();
    const res = await sendEmail(email);
    if (res.status === 0) {
      await saveCode(email, res.code, this.model('EmailAndCode'), this);
      return this.success('发送成功');
    }
  }
  // 注册账号
  async registerAction() {
    const { account, password, email, authcode } = this.post();
    // 查看验证码和邮箱是否符合
    const EmailAndCodeModel = this.model('EmailAndCode');
    const findData = await EmailAndCodeModel.where({ EMAIL: email, CODE: authcode }).find();
    if (!think.isEmpty(findData)) {
      // 查找到符合的就在用户列表中加入该条数据
      const UserModel = this.model('User');
      await UserModel.add({ ACCOUNT: account, PASSWORD: password, EMAIL: email, AVATAR: 'http://qiniu.junstart.top/2023_5_28_16395421.png' });
      return this.success('注册成功');
    } else {
      return this.fail(1, '验证码过期,请重新获取验证码');
    }
  }
  // 登录账号
  async loginAction() {
    const { account, password } = this.post();
    if (think.isEmpty(account)) {
      return this.fail('账号不能为空');
    }
    if (think.isEmpty(password)) {
      return this.fail('密码不能为空');
    }

    // 用账号和密码去数据库验证
    const findData = await this.model('User').where({ account, password }).find();
    if (!think.isEmpty(findData)) {
      // 有账号
      const token = createToken({ USER_UUID: findData.USER_UUID, ACCOUNT: findData.ACCOUNT });
      return this.success({
        token,
        userInfo: findData
      });
    } else {
      return this.fail('账号或者密码错误');
    }
  }
  // 上传更新头像
  async updateAvatarAction() {
    const data = this.post();
    think.logger.info(data.url);
    const UserModel = this.model('User');
    const token = this.header('authorization'); // 获取 token
    const tokenRes = await verifyToken(token);
    await UserModel.where({
      USER_UUID: tokenRes.USER_UUID
    }).update({
      AVATAR: data.url
    });
    return this.success();
  }
};
