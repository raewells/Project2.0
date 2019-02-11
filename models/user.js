module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });
  Users.associate = function(models) {
    Users.hasMany(models.Meals, {
      onDelete: "cascade"
    });
  };
  return Users;
};
