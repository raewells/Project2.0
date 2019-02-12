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
      autoIncrement: true,
      primaryKey: true
    },
    meal_name: {
      type: DataTypes.STRING
    },
    ingredient_1: {
      type: DataTypes.STRING
    },
    amount_1: {
      type: DataTypes.INTEGER
    },
    ingredient_2: {
      type: DataTypes.STRING
    },
    amount_2: {
      type: DataTypes.INTEGER
    },
    ingredient_3: {
      type: DataTypes.STRING
    },
    amount_3: {
      type: DataTypes.INTEGER
    },
    ingredient_4: {
      type: DataTypes.STRING
    },
    amount_4: {
      type: DataTypes.INTEGER
    },
    ingredient_5: {
      type: DataTypes.STRING
    },
    amount_5: {
      type: DataTypes.INTEGER
    },
    ingredient_6: {
      type: DataTypes.STRING
    },
    amount_6: {
      type: DataTypes.INTEGER
    },
    ingredient_7: {
      type: DataTypes.STRING
    },
    amount_7: {
      type: DataTypes.INTEGER
    },
    ingredient_8: {
      type: DataTypes.STRING
    },
    amount_8: {
      type: DataTypes.INTEGER
    },
    ingredient_9: {
      type: DataTypes.STRING
    },
    amount_9: {
      type: DataTypes.INTEGER
    },
    ingredient_10: {
      type: DataTypes.STRING
    },
    amount_10: {
      type: DataTypes.INTEGER
    },
    total_cals: {
      type: DataTypes.FLOAT
    },
    total_fat: {
      type: DataTypes.FLOAT
    },
    total_carbs: {
      type: DataTypes.FLOAT
    },
    total_protein: {
      type: DataTypes.FLOAT
    },
    total_sugar: {
      type: DataTypes.FLOAT
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
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
