require('./global');
const webSocketList = {
  chatRoom: new Map(), // 聊天室websocket列表
  chatRoomUser: new Map(), // 聊天室用户列表
  messageList: new Map() // 聊天消息列表
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
    // 添加文章的列表
    if (!webSocketList.chatRoom.has(this.wsData.data.articleuuid)) {
      webSocketList.chatRoom.set(this.wsData.data.articleuuid, new Map());
      webSocketList.chatRoomUser.set(this.wsData.data.articleuuid, []);
    }

    // 获取文章id对应的聊天室内容

    const chatRoom = webSocketList.chatRoom.get(this.wsData.data.articleuuid);
    const chatRoomUser = webSocketList.chatRoomUser.get(this.wsData.data.articleuuid);

    if (!chatRoom.has(this.wsData.data.useruuid)) {
      // 添加数据
      chatRoom.set(this.wsData.data.useruuid, this.websocket);
      chatRoomUser.push(this.wsData.data);
      // 覆盖数据
      webSocketList.chatRoom.set(this.wsData.data.articleuuid, chatRoom);
      webSocketList.chatRoomUser.set(this.wsData.data.articleuuid, chatRoomUser);

      // 发送数据
      for (const websocketItem of chatRoom.values()) {
        websocketItem.send(JSON.stringify({
          data: chatRoomUser,
          callback: 'joinChatRoom'
        }));
      }
    }
  }
  // 聊天室 - 退出房间
  async closeChatRoomAction() {
    const chatRoom = webSocketList.chatRoom.get(this.wsData.data.articleuuid);
    let chatRoomUser = webSocketList.chatRoomUser.get(this.wsData.data.articleuuid);

    if (chatRoom.has(this.wsData.data.useruuid)) {
      // 添加数据
      chatRoom.delete(this.wsData.data.useruuid);
      chatRoomUser = chatRoomUser.filter(item => {
        return item.useruuid !== this.wsData.data.useruuid;
      });
      webSocketList.chatRoomUser.set(this.wsData.data.articleuuid, chatRoomUser);

      // 发送数据
      for (const websocketItem of chatRoom.values()) {
        websocketItem.send(JSON.stringify({
          data: chatRoomUser,
          callback: 'closeChatRoom'
        }));
      }
    }
  }
  // 聊天室 -发送信息
  async sendChatRoomAction() {
    const chatRoom = webSocketList.chatRoom.get(this.wsData.data.articleuuid);
    for (const websocketItem of chatRoom.values()) {
      websocketItem.send(JSON.stringify(this.wsData.data));
    }
  }
};
