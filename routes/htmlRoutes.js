var db = require("../models");


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


  app.get("/login", function(req, res) {
    res.render("login.ejs");
  });

  
  app.get("*", function(req, res) {
    res.render("404");
  });
};


