module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
  }

  openAction() {
    // 单个发送
    this.emit('opend', '开启了链接');
    // 广播
    this.broadcast('joined', '加入了群聊');
  }

  closeAction() {
    // 单个发送
    this.emit('close', '关闭了链接');
    // 广播
    this.broadcast('joined', '退出了群聊');
  }
};
