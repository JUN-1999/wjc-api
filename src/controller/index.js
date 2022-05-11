const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
      return this.success('Hello World')
    // return this.display();
  }
};
