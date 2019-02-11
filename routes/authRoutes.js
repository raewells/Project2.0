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

// auth logout
router.get("/logout", function(req, res) {
  //handle with passport
  console.log("logging out");
  req.logout();
  req.session = null;
  res.render("index", { user: req.user });
});

//auth with google
router.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

//callback route for google to redirect to
router.get('/auth/google/callback',
passport.authenticate('google', {
    failureRedirect: '/'
}),
(req, res) => {
    console.log(req.user.token);
    req.session.token = req.user.token;
    res.redirect('/');
}
);


module.exports = router;