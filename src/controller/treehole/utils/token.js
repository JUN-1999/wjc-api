const jwt = require('jsonwebtoken');
// 撒盐，加密时候混淆
const secret = 'jun3290jun3290jun3290';

// 生成token
// info也就是payload是需要存入token的信息
const createToken = (info) => {
  const token = jwt.sign(info, secret, {
    // Token有效时间 单位s
    expiresIn: 3600 * 5
  });
  return token;
};
// 验证Token
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  createToken,
  verifyToken
};
