
const { createClient } = require('icqq');
const { getWeatherNow } = require('../../request/weatherNow');
const client = createClient();

const accountMap = [
  { account: 1173943332, password: 'jun3290...' },
  { account: 2724163452, password: 'jun3290..' }
];
const index = 0;
const account = accountMap[index].account;
const password = accountMap[index].password;
const IncludedGroup = [751905904, 672340246]; // 包含的群
const ExcludedUser = [account];// 排除的用户
const UserMessageMap = new Map();

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
client.on('message.group', async (e) => {
  if (IncludedGroup.includes(e.group_id)) {
    if (e.atme) {
      e.group.sendMsg('我是机器人');
      const pickMember = client.pickMember(e.group_id, e.sender.user_id);
      pickMember.sendMsg('怎么了 大古');
    }
  }

  if (IncludedGroup.includes(e.group_id) && !ExcludedUser.includes(e.sender.user_id)) {
    // 如果是天气查询
    const message = e.raw_message;
    if (message.indexOf('天气') !== -1) {
      console.log(message);
      const city = message.split(' ')[1];
      const { now } = await getWeatherNow(city);
      e.group.sendMsg(`天气：${now.text}，温度：${now.temp}，能见度：${now.vis}，相对湿度：${now.humidity}，风速：${now.windSpeed}公里/小时，风力等级：${now.windScale}，风向：${now.windDir}`);
    }

    // 聊天记录收集
    UserMessageMap.set(e.message_id, e.raw_message);
    if (UserMessageMap.size > 100) {
      const MAPKEY = UserMessageMap.keys().next().value; // 获取第一个key
      UserMessageMap.delete(MAPKEY);// 删除第一个key对应的属性
    }
  }
});
// 监听群撤回
client.on('notice.group.recall', (e) => {
  if (IncludedGroup.includes(e.group_id)) {
    const group = client.pickGroup(e.group_id); // 群
    const member = client.pickMember(e.group_id, e.user_id); // 群成员
    group.sendMsg(`${member.card}：撤回了消息 【${UserMessageMap.get(e.message_id)}】`);
  }
});

client.on('system.online', (e) => {
  console.log('上线了');
  // 发送吃药
  setMessageChiYao();
});

function setMessageChiYao() {
  const times = [
    9, 14, 18
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
