require('./global');
const webSocketList = {
  chatRoom: new Map()
};
module.exports = class extends think.Controller {
  // eslint-disable-next-line no-useless-constructor
  constructor(...arg) {
    super(...arg);
  }
  // 开启了链接
  async openAction() {
    think.logger.info('ws open');
    // think.logger.info('发送来的信息');
    // think.logger.info('wsData', this.wsData); // 传送过来的数据
    // think.logger.info('websocket', this.websocket); // 通信的websocket对象
    // think.logger.info('isWebsocket', this.isWebsocket); // 是否为websocket通信
    return this.success();
  }

  async closeAction() {
    think.logger.info('ws close');
    return this.success();
  }
  // 心跳检测
  async heartbeatAction() {
    this.emit('pink');
  }

  // 聊天室 - 加入房间
  async joinChatRoomAction() {
    if (!webSocketList.chatRoom.has(this.wsData.data.useruuid)) {
      webSocketList.chatRoom.set(this.wsData.data.useruuid, this.websocket);
    }
  }
  // 聊天室 - 退出房间
  async closeChatRoomAction() {
    if (webSocketList.chatRoom.has(this.wsData.data.useruuid)) {
      webSocketList.chatRoom.delete(this.wsData.data.useruuid);
    }
  }
  // 聊天室 -发送信息
  async sendChatRoomAction() {
    for (const websocketItem of webSocketList.chatRoom.values()) {
      websocketItem.send(JSON.stringify(this.wsData.data));
    }
  }
};
