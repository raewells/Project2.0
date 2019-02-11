// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

"use strict";

module.exports = function(sequelize, DataTypes) {
  var Meals = sequelize.define("Meals", {
    meal_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    meal_name: {
      type: DataTypes.STRING
    },
    ingredient_1: {
      type: DataTypes.STRING
    },
    ingredient_2: {
      type: DataTypes.STRING
    },
    ingredient_3: {
      type: DataTypes.STRING
    },
    ingredient_4: {
      type: DataTypes.STRING
    },
    ingredient_5: {
      type: DataTypes.STRING
    },
    ingredient_6: {
      type: DataTypes.STRING
    },
    ingredient_7: {
      type: DataTypes.STRING
    },
    ingredient_8: {
      type: DataTypes.STRING
    },
    ingredient_9: {
      type: DataTypes.STRING
    },
    ingredient_10: {
      type: DataTypes.STRING
    },
    total_cals: {
      type: DataTypes.FLOAT
    },
    created_by_user: {
      type: DataTypes.STRING,
      references: {
        model: "users",
        key: "username"
      }
    }
  });
  return Meals;
};
