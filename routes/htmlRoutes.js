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



  // Load example page and pass in an example by id
  app.get("/examples/:ingredient", function(req, res) {
    console.log("ingredient", req.params.ingredient);
    var searchIngredient = foodWeb.search(req.params.ingredient, 5);
    console.log(searchIngredient);
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
