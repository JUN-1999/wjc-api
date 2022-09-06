const Base = require('../base.js');

module.exports = class extends Base {
  async getuserAction() {
    const model = this.model('user');
    const data = await model.select();
    return this.success(data);
    // return this.display();
  }
};
