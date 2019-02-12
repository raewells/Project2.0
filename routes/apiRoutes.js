var db = require("../models");
var foodWeb = require("foodweb");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function (req, res) {
  //   db.Example.create(req.body).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.get("/api/getSearches/:ingredient", function(req, res) {
    var item = foodWeb.search(req.params.ingredient, 5);
    console.log("params 1111111", req.params.ingredient);
    for (var i = 0; i < item.length; i++) {
      console.log("search .............. ", item[i].data.title);
    }
    db.Searches.findAll({}).then(function(dbSearches) {
      res.json(dbSearches);
    });
  });

  app.post("/api/postSearches/:ingredient", function(req, res) {
    console.log("hi i am alive ========?>>>>>");
    console.log("params", req.params.ingredient);
    var searchIngredient = foodWeb.search(req.params.ingredient, 5);
    // console.log("search .............. ", searchIngredient.data);
    for (var i = 0; i < searchIngredient.length; i++) {
      db.Searches.create(searchIngredient).then(function(dbSearches) {
        res.json(dbSearches);
      });
    }
  });

  app.delete("/api/Searches", function(req, res) {
    db.Searches.destroy({}).then(function(dbSearches) {
      res.json(dbSearches);
    });
  });

  app.get("/api/Meals", function(req, res) {
    db.Meals.findAll({}).then(function(dbMeals) {
      res.json(dbMeals);
    });
  });

  app.post("/api/Meals/:ingredient", function(req, res) {
    db.Meals.create(req.body).then(function(dbMeals) {
      res.json(dbMeals);
    });
  });

  app.delete("/api/Meals/:ingredient", function(req, res) {
    db.Meals.destroy({ where: { id: req.params.ingredient } }).then(function(
      dbMeals
    ) {
      res.json(dbMeals);
    });
  });

  // app.get("/api/Meals/", function(req, res) {
  //   db.Meals
  // })

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });

  //testing create user
  // app.post("/api/user", function(req, res) {
  //   db.User.create(req.body).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });
};
