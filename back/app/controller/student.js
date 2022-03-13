'use strict';

const Controller = require('egg').Controller;

class StudentController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await this.app.model.Student.findAll(
      {
        include: {
          model: this.app.model.Clazz,
        },
      }
    );
  }
  async create() {
    const name = this.ctx.request.body.name;
    const clazz_id = this.ctx.request.body.clazz_id;
    console.log('%o', this.ctx.request.body);
    await this.app.model.Student.create({ name, clazz_id });
    this.ctx.body = '数据添加成功';
  }

  async destroy() {
    const id = this.ctx.params.id;
    const ret = await this.app.model.Student.destroy({
      where: {
        id,
      },
    });
    console.log(ret);
    this.ctx.body = '删除数据成功';
  }
}

module.exports = StudentController;
