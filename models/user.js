// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     type: DataTypes.STRING,
//     description: DataTypes.type
//   });
//   return Example;
// };


module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING
      }, 
      last_name: {
        type: DataTypes.STRING
      }, 
      email: {
        type: DataTypes.STRING
      },
      created_at: {
        type: DataTypes.DATE
      }
  });
  return Users;
}
