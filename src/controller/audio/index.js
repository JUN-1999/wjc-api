const Base = require('../base.js');

module.exports = class extends Base {
  async audioListAction() {
    const model = this.model('Audio');
    const audioList = await model.select();
    return this.success(audioList);
  }
};
