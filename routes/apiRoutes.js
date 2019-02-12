var db = require("../models");
var foodWeb = require("foodweb");

module.exports = function(app) {
  

  app.get("/api/getSearches", function (req, res) {
    db.Searches.findAll({}).then(function (dbSearches) {
      res.json(dbSearches)
    });
  });

  app.post("/api/postSearches", function (req, res) {
    console.log('hi i am alive ========?>>>>>');
    console.log("params", req.body);
    var item = foodWeb.search(req.body.search, 5);
    console.log("search .............. ", item[0].data.title);
    for (var i = 0; i < Object.keys(item).length; i++) {
      db.Searches.create({
        search: item[i].data.title,
        amount: req.body.amount
      }).then(function (dbSearches) {
        res.json(dbSearches);
      });
    };
 

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

  
};
