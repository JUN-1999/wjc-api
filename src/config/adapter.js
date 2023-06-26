const fileCache = require('think-cache-file');
const nunjucks = require('think-view-nunjucks');
const fileSession = require('think-session-file');
const mysql = require('think-model-mysql');
const { Console, File, DateFile } = require('think-logger3');
const path = require('path');
const isDev = think.env === 'development';
const socketio = require('think-websocket-socket.io');
const ws = require('think-websocket-ws');
/**
 * cache adapter config
 * @type {Object}
 */
exports.cache = {
  type: 'file',
  common: {
    timeout: 24 * 60 * 60 * 1000 // millisecond
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, 'runtime/cache'), // absoulte path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval
  }
};

/**
 * model adapter config
 * @type {Object}
 */
exports.model = {
  type: 'mysql',
  common: {
    logConnect: isDev,
    logSql: isDev,
    logger: (msg) => think.logger.info(msg)
  },
  mysql: {
    handle: mysql,
    database: 'web_product',
    prefix: '',
    encoding: 'utf8',
    host: '112.124.54.36',
    port: '3306',
    user: 'root',
    password: 'jun3290..',
    dateStrings: true
  }
};

/**
 * session adapter config
 * @type {Object}
 */
exports.session = {
  type: 'file',
  common: {
    cookie: {
      name: 'thinkjs'
      // keys: ['werwer', 'werwer'],
      // signed: true
    }
  },
  file: {
    handle: fileSession,
    sessionPath: path.join(think.ROOT_PATH, 'runtime/session')
  }
};

/**
 * view adapter config
 * @type {Object}
 */
exports.view = {
  type: 'nunjucks',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  nunjucks: {
    handle: nunjucks
  }
};

/**
 * logger adapter config
 * @type {Object}
 */
exports.logger = {
  type: isDev ? 'console' : 'dateFile',
  console: {
    handle: Console
  },
  file: {
    handle: File,
    backups: 10, // max chunk number
    absolute: true,
    maxLogSize: 50 * 1024, // 50M
    filename: path.join(think.ROOT_PATH, 'logs/app.log')
  },
  dateFile: {
    handle: DateFile,
    level: 'ALL',
    absolute: true,
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: true,
    filename: path.join(think.ROOT_PATH, 'logs/app.log')
  }
};

exports.websocket = {
  type: 'ws',
  // type: 'ws',
  common: {
    // common config

  },
  ws: {
    handle: ws,
    path: '/ws',
    messages: {
      open: '/websocket/open', // 建立连接时处理对应到 websocket Controller 下的 open Action
      close: '/websocket/close', // 关闭连接时处理的 Action
      heartbeat: '/websocket/heartbeat', // 心跳检验
      joinChatRoom: '/websocket/joinChatRoom', // 聊天室 - 加入
      closeChatRoom: '/websocket/closeChatRoom', // 聊天室 - 退出
      sendChatRoom: '/websocket/sendChatRoom' // 聊天室-发送信息

    }
  }
};
