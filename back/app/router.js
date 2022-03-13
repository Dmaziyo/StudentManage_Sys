'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('clazz', '/clazz', controller.clazz);
  router.resources('student', '/student', controller.student);
  router.post('login', '/login', controller.login.login);
  router.get('login', '/verify', controller.login.verify);
};
