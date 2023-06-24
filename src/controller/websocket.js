require('./global');
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
    this.io = this.ctx.req.io;
    this.socket = this.ctx.req.websocket;
    global.$socketChat.io = this.io;
  }
  // 开启了链接
  async openAction() {
    think.logger.info('ws open');
    return this.success();
  }

  async closeAction() {
    think.logger.info('ws close');
    return this.success();
  }

  async sendAction() {
    think.logger.info('发送来的信息');
    think.logger.info(this.wsData); // this.req.websocketData, 'thinkjs'
    think.logger.info(this.websocket); // this.req.websocket, websocket instance
    think.logger.info(this.isWebsocket); // this.isMethod('WEBSOCKET'), true
    this.emit('sendMessage', 'This client opened successfully!');
    return this.success();
  }
};
