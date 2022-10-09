module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  openAction() {
    think.logger.info('opend');
    // 单个发送
    this.emit('opend', '开启了链接');
    // 广播
    this.broadcast('joined', '加入了群聊');
  }

  closeAction() {
    think.logger.info('close');
    // 单个发送
    this.emit('close', '关闭了链接');
    // 广播
    this.broadcast('joined', '退出了群聊');
  }
  // 发送信息
  setMessageAction() {
    think.logger.info('info message');
    think.logger.info('获取客户端 addUser 事件发送的数据', this.wsData);
    // think.logger.info('获取当前 WebSocket 对象', this.websocket);
    // think.logger.info('判断当前请求是否是 WebSocket 请求', this.isWebsocket);
    this.emit('getMessage', this.wsData);
  }
};
