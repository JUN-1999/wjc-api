const Base = require('../base.js');
const { getWeatherNow } = require('../../request/weatherNow.js');

module.exports = class extends Base {
  async indexAction() {
    const res = await getWeatherNow('钱塘区');
    console.log(res);
    return this.success(res);
  }
};
