const Base = require('../base.js');
const AccessKey = '_KD913kXJ3ftw0HmPGxljL_5SM0o5DubuzTbmzvr';
const SecretKey = 'lDzScbrwC-evXUct8xWA3D1LRxXLPN2hqwwtGonH';
const qiniu = require('qiniu');
const bucket = 'jun-treehole';
var options = {
  scope: bucket
};
var putPolicy = new qiniu.rs.PutPolicy(options);

var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0;
// 是否使用https域名
// config.useHttpsDomain = true;
// 上传是否使用cdn加速
// config.useCdnDomain = true;

var qiniuUrl = 'http://qiniu.junstart.top/'; // 域名名称

module.exports = class extends Base {
  async uploadIMGAction() {
    let type = '';

    const { file } = this.file();
    const imgregex = /^.*\.(jpg|jpeg|png|gif|bmp)$/;
    const videoregex = /^.*\.(mp4|avi|mov|flv|wmv|webm)$/;

    if (imgregex.test(file.name)) {
      type = 'img';
    } else if (videoregex.test(file.name)) {
      type = 'video';
    } else {
      return this.fail('文件格式不正确');
    }

    // 鉴权对象mac
    const mac = new qiniu.auth.digest.Mac(AccessKey, SecretKey);
    const uploadToken = putPolicy.uploadToken(mac);
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();

    const date = new Date();
    const ext = file.name.split('.')[1];

    const key = type + 's/' + date.getFullYear() + '_' + (date.getMonth() + 1) + '_' + date.getDate() + '_' + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() + '.' + ext;
    const localFile = file.path; // 可读的流

    // 文件上传
    const res = await new Promise((resolve, reject) => {
      formUploader.putFile(uploadToken, key, localFile, putExtra, (respErr,
        respBody, respInfo) => {
        if (respErr) {
          reject(respErr);
          throw respErr;
        }

        if (respInfo.statusCode === 200) {
          resolve({
            url: qiniuUrl + respBody.key,
            name: respBody.key,
            type: type,
            status: 1
          });
        } else {

        }
      });
    });

    if (res.status === 1) {
      return this.success({
        url: res.url,
        name: res.name,
        type: res.type
      });
    } else {
      return this.fail('图片上传失败');
    }
  }
};
