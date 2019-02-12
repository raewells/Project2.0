var router = require("express").Router();
var passport = require("passport");

function authCheck(req, res, next) {
  if (!req.user) {
    //if user is not logged in
    res.send("You must log in to create your meal plan!");
  } else {
    // if logged in
    next();
  }
}

// auth login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});


router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});


//auth with google
router.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));



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