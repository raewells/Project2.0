var db = require("../models");
// var foodWeb = require("foodweb");
// var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Meals.findAll({}).then(function(dbMeals) {
      res.render("index", {
        Meals: dbMeals
      });
    });
  });
  console.log("2, html routes");

  //Just for testing login
 
  //Just for testing login
  app.get("/login", function(req, res) {
    res.render("login.ejs");
  });
  //futher google login, rachel will look over this

  // app.get("/auth/google", function(req, res) {
  //   res.render("");
  // })

  //^^^futher google login, rachel will look over this^^^

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

  // app.get("/Meals", function(req, res) {

  //   db.Meals.findAll({}).then(function(dbMeals) {
  //     // console.log("ingredient post", req.body);
  //     res.render("Meals", {

  //     })
  //   });
  // });

  // Load example page and pass in an example by id
  // app.get("/ingredientSearch/:ingredient", function(req, res) {
  //   console.log("ingredient", req.params.ingredient);
  //   var searchIngredient = foodWeb.search(req.params.ingredient, 5);
  //   console.log(searchIngredient);

  //   db.Example.findOne({ where: { text: req.params.ingredient } }).then(
  //     function(dbExample) {
  //       console.log("db test", dbExample);
  //       res.render("searches", {
  //         searches: dbExample
  //       });
  //     }
  //   );
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};



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