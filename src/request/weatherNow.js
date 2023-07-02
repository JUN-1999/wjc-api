const { weatherFun, geoapiFun } = require('./index');

// 获得 实时天气
const getWeatherNow = async function(location) {
  const cityinfo = await geoapiFun({
    url: 'v2/city/lookup',
    params: {
      location
    }
  });
  return weatherFun({
    url: 'v7/weather/now',
    params: {
      location: cityinfo.location[0].id
    }
  });
};

// 获得三天天气
const getWeatherThree = async function(location) {
  const cityinfo = await geoapiFun({
    url: 'v2/city/lookup',
    params: {
      location
    }
  });
  return weatherFun({
    url: 'v7/weather/3d',
    params: {
      location: cityinfo.location[0].id
    }
  });
};
module.exports = {
  getWeatherNow,
  getWeatherThree
};
