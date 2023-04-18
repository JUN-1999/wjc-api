
const { createClient, Message } = require('icqq');
const client = createClient();
const account = 1173943332;
const password = 'jun3290...';

const user_message_map = new Map();

client.on('system.login.slider', (e) => {
  console.log('输入滑块地址获取的ticket后继续。\n滑块地址:    ' + e.url);
  process.stdin.once('data', (data) => {
    client.submitSlider(data.toString().trim());
  });
});
client.on('system.login.qrcode', (e) => {
  console.log('扫码完成后回车继续:    ');
  process.stdin.once('data', () => {
    client.login();
  });
});
client.on('system.login.device', (e) => {
  console.log('请选择验证方式:(1：短信验证   其他：扫码验证)');
  process.stdin.once('data', (data) => {
    if (data.toString().trim() === '1') {
      client.sendSmsCode();
      console.log('请输入手机收到的短信验证码:');
      process.stdin.once('data', (res) => {
        client.submitSmsCode(res.toString().trim());
      });
    } else {
      console.log('扫码完成后回车继续：' + e.url);
      process.stdin.once('data', () => {
        client.login();
      });
    }
  });
});
client.login(account, password);

// 监听群消息
client.on('message.group', (e) => {
  if (e.group_id === 751905904) {
    // 测试服务器
    if (e.atme) {
      e.group.sendMsg('你好世界');
    }

    user_message_map.set(e.message_id, e.raw_message);
    if (user_message_map.size > 100) {
      const MAPKEY = user_message_map.keys().next().value; // 获取第一个key
      user_message_map.delete(MAPKEY);// 删除第一个key对应的属性
    }
  }
  if (e.group_id === 672340246) {
    // 天打雷劈
    if (e.atme) {
      e.group.sendMsg('我是机器人');
      const pickMember = client.pickMember(672340246, e.sender.user_id);
      pickMember.sendMsg('怎么了 大古');
    }

    if (e.sender.user_id !== 1173943332) {
      user_message_map.set(e.message_id, e.raw_message);
      if (user_message_map.size > 100) {
        const MAPKEY = user_message_map.keys().next().value; // 获取第一个key
        user_message_map.delete(MAPKEY);// 删除第一个key对应的属性
      }
    }
  }
});
// 监听群撤回
client.on('notice.group.recall', (e) => {
  if (e.group_id === 751905904) {
    const group = client.pickGroup(e.group_id); // 群
    const member = client.pickMember(e.group_id, e.user_id); // 群成员

    group.sendMsg(`${member.card}：撤回了消息 【${user_message_map.get(e.message_id)}】`);
  }
});

client.on('system.online', (e) => {
  console.log('上线了');
  // 发送吃药
  setMessageChiYao();
});

function setMessageChiYao() {
  const times = [
    8, 14, 18
  ];
  let flag = false;
  const liuFriend = client.pickFriend(774725240);
  const timer = setInterval(() => {
    const hours = new Date().getHours();
    if (times.includes(hours) && !flag) {
      flag = !flag;
      liuFriend.sendMsg('小老弟吃药了');
    } else if (!times.includes(hours)) {
      flag = false;
    }
  }, 30000);
}
