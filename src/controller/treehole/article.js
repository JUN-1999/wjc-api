
const Base = require('../base.js');
const { verifyToken } = require('./utils/token.js');
module.exports = class extends Base {
  async __before() {
    const flag = await super.__before();
    if (!flag) {
      return this.fail({
        code: 401,
        message: '登录信息过期'
      });
    }
  }
  // 新增/修改 文章 id为0为新增，否则为修改
  async updateArticleAction() {
    const data = this.post();
    const { title, content, pics } = data.form;

    const token = this.header('authorization'); // 获取 token
    const tokenRes = await verifyToken(token);
    const model = this.model('Article');
    if (data.id === 0) {
      // 新增操作
      const res = await model.add({
        TITLE: title,
        CONTENT: content,
        PICS: JSON.stringify(pics),
        USER_UUID: tokenRes.USER_UUID,
        STATUS: 1
      });

      if (res === 0) {
        return this.success('添加成功');
      } else {
        return this.fail('添加出错');
      }
    } else {
      // 修改操作

    }

    return this.success('添加成功');
  }
  //   获得 文章列表
  async articleListAction() {
    const { page, pageSize } = this.get();
    const model = this.model('Article');
    model._pk = 'ARTICLE_UUID';
    const data = await model.join({
      table: 'User',
      join: 'left',
      as: 'b',
      on: ['USER_UUID', 'b.USER_UUID']
    }).field('ARTICLE_UUID,TITLE,CONTENT,PICS,ADD_TIME,UPDATE_TIME,ACCOUNT,AVATAR').page(page, pageSize).countSelect();
    return this.success(data);
  }
  // 获得具体文章
  async articleInfoAction() {
    const { article_uuid: ARTICLE_UUID } = this.get();

    const model = this.model('Article');
    model._pk = 'ARTICLE_UUID';
    const data = await model.join({
      table: 'User',
      join: 'left',
      as: 'b',
      on: ['USER_UUID', 'b.USER_UUID']
    }).field('ARTICLE_UUID,TITLE,CONTENT,PICS,ADD_TIME,UPDATE_TIME,ACCOUNT,AVATAR').where({
      ARTICLE_UUID
    }).find();

    return this.success(data);
  }
};
