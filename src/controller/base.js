const { verifyToken } = require('./treehole/utils/token');
module.exports = class extends think.Controller {
  async __before() {
    this.header('Access-Control-Allow-Origin', '*');
    this.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    this.header('Access-Control-Allow-Headers', 'Content-Type');

    if (this.ctx.request.url.indexOf('treehole') !== -1) {
      // 如果是树洞的接口，则需要验证token
      const token = this.header('authorization'); // 获取 token
      return new Promise((resolve, reject) => {
        verifyToken(token).then(() => {
          resolve(true);
        }).catch(() => {
          resolve(false);
        });
      });
    } else {
      return true;
    }
  }
};
