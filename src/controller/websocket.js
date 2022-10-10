require('./global');
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
    this.io = this.ctx.req.io;
    this.socket = this.ctx.req.websocket;
    global.$socketChat.io = this.io;
  }
  // 开启了链接
  openAction() {
    think.logger.info('opend');
    think.logger.info('获取客户端opend事件发送的数据', this.wsData);

    // 单个发送
    this.emit('opend', '开启了链接');
  }

  async roomAction() {
    global.$socketChat[this.socket.id] = {
      nickname: this.wsData.nickname,
      socket: this.socket
    };

    this.socket.broadcast.emit('room', {
      nickname: this.wsData.nickname,
      type: 'in',
      id: this.socket.id
    });
  }

  // 发送信息
  // setMessageAction() {
  //   think.logger.info('setMessage');
  //   think.logger.info('获取客户端 setMessage 事件发送的数据', this.wsData);
  //   // think.logger.info('获取当前 WebSocket 对象', this.websocket);
  //   // think.logger.info('判断当前请求是否是 WebSocket 请求', this.isWebsocket);
  //   // this.emit('getMessage', this.wsData);
  //   // 广播
  //   this.broadcast('getMessage', this.wsData);
  // }

  messageAction() {
    this.io.emit('message', {
      nickname: this.wsData.nickname,
      type: 'message',
      message: this.wsData.message,
      id: this.socket.id
    });
  }

  async closeAction() {
    const closeSocket = global.$socketChat[this.socket.id];
    const nickname = closeSocket && closeSocket.nickname;
    this.socket.disconnect(true);
    this.socket.removeAllListeners();
    this.socket.broadcast.emit('room', {
      nickname,
      type: 'out',
      id: this.socket.id
    });
    delete global.$socketChat[this.socket.id];
  }
};
