const Base = require('../base.js');
module.exports = class extends Base {
  async __before() {
    console.log('123__before');
  }
  indexAction() {
    // __before 调用完成后才会调用 indexAction
    return this.success('123');
  }
};
