// 'use strict';

// module.exports = app => {
//   const { STRING } = app.Sequelize;
//   const Stu_to_Clazz = app.model.define('Stu_to_Clazz', {
//     name: STRING,
//     clazz_name: STRING,
//   });
//   Stu_to_Clazz.associate = function() {
//     app.model.Stu_to_Clazz.belongsTo(app.model.Clazz, {
//       foreignKey: 'clazz_id',
//     });
//     app.model.Stu_to_Clazz.belongsTo(app.model.Student, {
//       foreignKey: 'student_id',
//       targetKey: 'clazz_id',
//     });
//   };
//   return Stu_to_Clazz;
// };
