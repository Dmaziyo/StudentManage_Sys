'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const Student = app.model.define('students', {
    name: STRING,
  });
  Student.associate = function() {
    app.model.Student.belongsTo(app.model.Clazz, {
      foreignKey: 'clazz_id',
      targetKey: 'id',
    });
  };
  return Student;
};
