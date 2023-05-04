const Base = require('../base.js');

module.exports = class extends Base {
  async getuserAction() {
    const model = this.model('User');
    const data = await model.select();
    return this.success(data);
    // return this.display();
  }
};
