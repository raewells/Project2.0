var router = require("express").Router();
// var db = require("../models");
var passport = require("passport");
// var path = require("path");
// var cookieSession = require("cookie-session");

function authCheck(req, res, next) {
  if (!req.user) {
    //if user is not logged in
    res.send("NOOOOO");
  } else {
    // if logged in
    next();
  }
}

// auth login
router.get("/login", authCheck, function(req, res) {
  res.render("index");
});

// router.get("/", function(req, res) {
//   res.render("index", { user: req.user });
// });

const router = require("express").Router();
const passport = require("passport");

// auth login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for google to redirect to
router.get("/google/redirect", (req, res) => {
  res.send("you reached the redirect URI");
});

module.exports = router;
