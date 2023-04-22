const axios = require('axios');

// 获取天气信息
const weatherAxios = axios.create({
  baseURL: 'https://devapi.qweather.com/',
  method: 'get',
  params: {
    key: 'f408572bdd8c433c9fbd1317cd013df3'
  }
});

const weatherFun = function(config) {
  return new Promise((resolve, reject) => {
    weatherAxios(config).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
};

// 获取地理信息
const geoapiAxios = axios.create({
  baseURL: 'https://geoapi.qweather.com/',
  method: 'get',
  params: {
    key: 'f408572bdd8c433c9fbd1317cd013df3'
  }
});

const geoapiFun = function(config) {
  return new Promise((resolve, reject) => {
    geoapiAxios(config).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
};

module.exports = {
  weatherAxios,
  geoapiAxios,
  geoapiFun,
  weatherFun
};
