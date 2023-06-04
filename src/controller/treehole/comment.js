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
  // 发布评论
  /*
    COMMENT_UUID        评论uuid
    COMMENT             评论内容
    PICS                媒体内容
    ARTICLE_UUID        文章uuid
    TO_USER_UUID        回复用户uuid（@某人的时候，用户的id）
    FATHER_COMMENT_UUID  回复的哪条评论的uuid（如果是评论则为空，如果是回复，则是评论的uuid）
    USER_UUID           评论的用户的UUID
    ADD_TIME            回复的时间
  */
  async sendCommentAction() {
    const data = this.post();
    const token = this.header('authorization'); // 获取 token
    const tokenRes = await verifyToken(token);
    const model = this.model('Comment');
    await model.add({
      COMMENT: data.comment,
      PICS: data.PICS,
      ARTICLE_UUID: data.article_uuid,
      TO_USER_UUID: data.to_user_uuid,
      FATHER_COMMENT_UUID: data.father_comment_uuid,
      USER_UUID: tokenRes.USER_UUID
    });
    return this.success();
  }

  // 获得评论列表
  /*
    评论【首级】 TO_USER_UUID： 为空、FATHER_COMMENT_UUID：为空
    一级回复 直接回复评论的 TO_USER_UUID：为空、FATHER_COMMENT_UUID：不为空
    二级回复 @了某人  TO_USER_UUID：不为空、FATHER_COMMENT_UUID：不为空
  */
  async commentListAction() {
    const data = this.get();
    const model = this.model('Comment');
    const mainRes = await model.join({
      table: 'User',
      join: 'left',
      as: 'b',
      on: ['USER_UUID', 'b.USER_UUID']
    }).where({
      ARTICLE_UUID: data.article_uuid,
      FATHER_COMMENT_UUID: ''
    }).order({
      ADD_TIME: 'DESC'
    }).field('COMMENT_UUID,COMMENT,ARTICLE_UUID,TO_USER_UUID,b.USER_UUID as USER_UUID,FATHER_COMMENT_UUID,ADD_TIME,ACCOUNT,AVATAR,PICS').select();

    think.logger.info('mainRes', mainRes);

    for (const item of mainRes) {
      const minorRes = await model.join({
        table: 'User',
        join: 'left',
        as: 'b',
        on: ['USER_UUID', 'b.USER_UUID']
      }).where({
        FATHER_COMMENT_UUID: item.COMMENT_UUID
      }).order({
        ADD_TIME: 'ASC'
      }).field('COMMENT_UUID,COMMENT,ARTICLE_UUID,TO_USER_UUID,b.USER_UUID as USER_UUID,FATHER_COMMENT_UUID,ADD_TIME,ACCOUNT,AVATAR,PICS').select();

      // 如果是二级
      for (const minorItem of minorRes) {
        if (minorItem.TO_USER_UUID) {
          const userInfo = await this.model('User').where({
            USER_UUID: minorItem.TO_USER_UUID
          }).field('ACCOUNT,AVATAR').find();
          minorItem.USERINFO = userInfo;
        }
      }

      item.childComment = minorRes;
    }

    return this.success(mainRes);
  }
};
