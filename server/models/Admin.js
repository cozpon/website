module.exports = function(sequelize, DataType) {
  const Admin = sequelize.define('Admin', {
    userName : {
      type : DataType.STRING,
      allowNull : false
    },
    password : {
      type : DataType.STRING,
      allowNull : false
    }
  },
  {
    tableName : 'admins'
  });

  return Admin;
};