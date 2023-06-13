
const Base = require('../base.js');

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

  //   添加时间轴
  async addTimeLineAction() {
    const data = this.post();
    const model = this.model('TimerLine');
    await model.add({
      ARTICLE_UUID: data.ARTICLE_UUID,
      COMMENT_UUID: data.COMMENT_UUID,
      TIME: data.TIME
    });
    return this.success('添加成功');
  }
  //   删除时间轴
  async deleteTimeLineAction() {
    const data = this.post();
    const model = this.model('TimerLine');
    await model.where({
      COMMENT_UUID: data.COMMENT_UUID
    }).delete();
    return this.success('删除成功');
  }
  // 获取时间轴
  async getTimeLineListAction() {
    const data = this.post();
    const model = this.model('TimerLine');
    const res = await model.join({
      table: 'Comment',
      join: 'left',
      as: 'b',
      on: ['COMMENT_UUID', 'b.COMMENT_UUID']
    }).where({
      'TimerLine.ARTICLE_UUID': data.ARTICLE_UUID
    }).order('TIME ASC').select();
    return this.success(res);
  }
};
