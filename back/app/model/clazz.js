'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const Clazz = app.model.define('clazz', {
    clazz_name: STRING,
  });
  // Clazz.associate = function() {
  //   app.model.Clazz.hasMany(app.model.Student, {
  //     foreignKey: 'clazz_id',
  //     targetKey: 'clazz_id',
  //   });
  // };
  return Clazz;
};
