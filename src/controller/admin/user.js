const Base = require('../base.js');

module.exports = class extends Base {
 async getuserAction() {
    let model = this.model('user');
    let data = await model.select();
      return this.success(data)
    // return this.display();
  }
};
