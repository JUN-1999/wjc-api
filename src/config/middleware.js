const path = require('path');
const isDev = think.env === 'development';
const kcors = require('kcors');
module.exports = [
  {
    handle: 'trace', // trace 中间件最好放在最前面，否则在 trace 之前的错误没办法 catch 到。
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: kcors, // 全局处理跨域，所有请求都会允许跨域，如果想要进行相关配置请看kcors文档进行配置
    options: {
      origin: '*',
      credentials: true,
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
  },
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: true, // isDev
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    handle: 'router',
    options: {}
  },
  'logic',
  'controller'
];
