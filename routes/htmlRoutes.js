var db = require("../models");
var foodWeb = require("foodweb");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  console.log("2, html routes");

  //Just for testing login
  app.get("/login", function(req, res) {
    res.render("login.ejs");
  });

  //load all meals
  // app.get("/meals", function(req, results) {
  //   db.Meals.findAll({
  //     meals: req.body.meal_name
  //   }).then(function(dbMeals) {
  //     let temp = JSON.stringify(results);
  //     let temp2 = JSON.parse(temp);
  //     console.log(temp);
  //     res.render("index", {
  //       meals: temp2
  //     });
  //   });
  // });

  //post request here to save ingredient to second table

  app.post("/ingredientSearch/", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      console.log("ingredient post", req.body);
      res.json(dbExample);
    });
  });

  // Load example page and pass in an example by id
  app.get("/ingredientSearch/:ingredient", function(req, res) {
    console.log("ingredient", req.params.ingredient);
    var searchIngredient = foodWeb.search(req.params.ingredient, 5);
    console.log(searchIngredient);

    db.Example.findOne({ where: { text: req.params.ingredient } }).then(
      function(dbExample) {
        console.log("db test", dbExample);
        res.render("searches", {
          searches: dbExample
        });
      }
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
