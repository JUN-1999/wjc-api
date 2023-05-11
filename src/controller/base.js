module.exports = class extends think.Controller {
  __before() {
    this.header('Access-Control-Allow-Origin', '*');
    this.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    this.header('Access-Control-Allow-Headers', 'Content-Type');
  }
};
