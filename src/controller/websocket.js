require('./global');
const webSocketList = {
  chatRoom: new Map()
};
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

  async sendChatRoomAction() {
    think.logger.info('发送来的信息');
    think.logger.info('wsData', this.wsData); // 传送过来的数据
    think.logger.info('websocket', this.websocket); // 通信的websocket对象
    think.logger.info('isWebsocket', this.isWebsocket); // 是否为websocket通信

    // 判断chatRoom里面  不存在就添加
    if (!webSocketList.chatRoom.has(this.wsData.data.useruuid)) {
      webSocketList.chatRoom.set(this.wsData.data.useruuid, this.websocket);
    }
    think.logger.info('webSocketList.chatRoom', webSocketList.chatRoom);
    for (const websocketItem of webSocketList.chatRoom.values()) {
      websocketItem.send(JSON.stringify(this.wsData.data));
    }
  }
};
