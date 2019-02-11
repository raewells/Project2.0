var db = require("../models");
var foodWeb = require("foodweb");

module.exports = function (app) {
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




  app.post("/api/Searches/:ingredient", function (req, res) {
    console.log("ingredient", req.params.ingredient);
    var searchIngredient = foodWeb.search(req.params.ingredient, 5);
    console.log(searchIngredient);

    db.Searches.create(searchIngredient).then(function (dbSearches) {
      res.json(dbSearches);
    });

  });

  app.delete("/api/Searches", function (req, res) {
    db.Searches.destroy({}).then(function (dbSearches) {
      res.json(dbSearches);
    });
  });

  app.get("/api/Meals", function (req, res) {
    db.Meals.findAll({}).then(function (dbMeals) {
      res.json(dbMeals);
    });
  });

  app.post("/api/Meals/:ingredient", function (req, res) {
    db.Meals.create(req.body).then(function (dbMeals) {
      db.Meals.create(req.body).then(function (dbMeals) {
        res.json(dbMeals);
      });
    });
  });

  app.delete("/api/Meals/:ingredient", function (req, res) {
    db.Meals.destroy({ where: { id: req.params.ingredient } }).then(function (dbMeals) {
      res.json(dbMeals);
    });
  });
};