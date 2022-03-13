'use strict';

const Controller = require('egg').Controller;

class ClazzController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await this.app.model.Clazz.findAll();
    ctx.body = data;
  }
  async create() {
    const clazz_name = this.ctx.request.body.clazz_name;
    console.log(clazz_name);
    await this.app.model.Clazz.create({ clazz_name });
    this.ctx.body = '数据添加成功';
  }
  async destroy() {
    const id = this.ctx.params.id;
    const ret = await this.app.model.Clazz.destroy({
      where: {
        id,
      },
    });
    console.log(ret);
    this.ctx.body = '删除数据成功';
  }
}
module.exports = ClazzController;
