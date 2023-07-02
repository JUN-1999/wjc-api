const Base = require('../base.js');
const { getWeatherNow, getWeatherThree } = require('../../request/weatherNow.js');

module.exports = class extends Base {
  async indexAction() {
    const data = this.post();
    const res = await getWeatherNow(data.location);
    return this.success(res);
  }
  async weather3dAction() {
    const data = this.post();
    const res = await getWeatherThree(data.location);
    return this.success(res);
  }
};
