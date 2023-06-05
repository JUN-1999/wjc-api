
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
    if (data.id === 0 || data.id === '0') {
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
      const res = await model.where({
        ARTICLE_UUID: data.id
      }).update({
        TITLE: title,
        CONTENT: content,
        PICS: JSON.stringify(pics)
      });
      if (res === 1) {
        return this.success('修改成功');
      } else {
        return this.fail('修改出错');
      }
    }
  }
  // 获得 文章列表
  async articleListAction() {
    const { page, pageSize } = this.get();
    const model = this.model('Article');
    model._pk = 'ARTICLE_UUID';
    const data = await model.join({
      table: 'User',
      join: 'left',
      as: 'b',
      on: ['USER_UUID', 'b.USER_UUID']
    }).where({
      'Article.STATUS': 1
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
  // 获得该用户种下的瓜的列表
  async articleCreateAction() {
    const token = this.header('authorization'); // 获取 token
    const tokenRes = await verifyToken(token);
    const model = this.model('Article');

    const res = await model.join({
      table: 'User',
      join: 'left',
      as: 'b',
      on: ['USER_UUID', 'b.USER_UUID']
    }).where({
      'Article.USER_UUID': tokenRes.USER_UUID,
      'Article.STATUS': 1
    }).field('ARTICLE_UUID,TITLE,CONTENT,PICS,ADD_TIME,UPDATE_TIME,ACCOUNT,AVATAR').select();
    return this.success(res);
  }
  // 获得该用户关注的瓜的列表
  async articleFollowAction() {
    const token = this.header('authorization'); // 获取 token
    const tokenRes = await verifyToken(token);
    const userModel = this.model('User');
    let { FOLLOW } = await userModel.where({
      USER_UUID: tokenRes.USER_UUID
    }).field('FOLLOW').find();
    FOLLOW = JSON.parse(FOLLOW);

    const articleModel = this.model('Article');
    const articleList = await articleModel.where({
      ARTICLE_UUID: ['IN', FOLLOW],
      'Article.STATUS': 1
    }).join({
      table: 'User',
      join: 'left',
      as: 'b',
      on: ['USER_UUID', 'b.USER_UUID']
    }).field('ARTICLE_UUID,TITLE,CONTENT,PICS,ADD_TIME,UPDATE_TIME,ACCOUNT,AVATAR').select();
    return this.success(articleList);
  }
  // 更新瓜的状态
  async updateArticleStatusAction() {
    const { id } = this.post();
    const model = this.model('Article');
    model._pk = 'ARTICLE_UUID';
    await model.where({
      ARTICLE_UUID: id
    }).update({
      STATUS: 0
    });
    return this.success();
  }
};
