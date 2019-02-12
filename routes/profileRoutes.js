var router = require("express").Router();

var authCheck = (req, res, next) => {
    if (!req.user) {
        //if user is not logged in
        res.redirect("auth/login");
    } else {
        next();
    }
};

router.get("/", authCheck, (req, res) => {
    res.render("profile.ejs", {user:req.user});
   
});

module.exports = router;