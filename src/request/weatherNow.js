const { weatherFun, geoapiFun } = require('./index');

// 获得 实时天气
const getWeatherNow = async function(city) {
  const cityinfo = await geoapiFun({
    url: 'v2/city/lookup',
    params: {
      location: city
    }
  });
  return weatherFun({
    url: 'v7/weather/now',
    params: {
      location: cityinfo.location[0].id
    }
  });
};
module.exports = {
  getWeatherNow
};
