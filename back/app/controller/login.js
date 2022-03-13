'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;
    if (username === 'admin' && password === '123456') {
      const token = this.app.jwt.sign({ username, password }, this.app.config.jwt.secret);
      this.ctx.body = {
        code: 200,
        token,
      };
    } else {
      this.ctx.body = {
        code: 400,
        message: '账号或密码错误',
      };
    }
  }
  async verify() {
    const { ctx } = this;
    const token = this.ctx.request.header.token;
    try {
      const ret = this.app.jwt.verify(token, this.app.config.jwt.secret);
      const username = ret.username;
      const password = ret.password;
      if (username === 'admin' && password === '123456') {
        ctx.body = {
          username,
          password,
          state: true,
        };
      }
    } catch (e) {
      ctx.body = {
        state: false,
      };
    }
  }
}
module.exports = LoginController;
