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
    googleId: {
      type: DataTypes.STRING
<<<<<<< HEAD
    }, 
    created_at: {
      field: 'created_at',
      type: DataTypes.DATE
  },
  updated_at: {
      field: 'updated_at',
=======
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE
    },
    updatedAt: {
      field: "updated_at",
>>>>>>> master
      type: DataTypes.DATE
    }
  });
  Users.associate = function(models) {
    Users.hasMany(models.Meals, {
      onDelete: "cascade"
    });

    Users.hasMany(models.Meals, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Users;

};