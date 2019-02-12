require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var authRoutes = require("./routes/authRoutes");
var profileRoutes = require("./routes/profileRoutes");
var passportSetup = require("./config/passport-setup");
var ejs = require("ejs");
var cookieSession = require("cookie-session");
var passport = require("passport");
var keys = require("./config/keys");


var app = express();
app.set("view engine", "ejs");

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

var db = require("./models");

var PORT = process.env.PORT || 3000;

//initialize passport
app.use(passport.initialize());
app.use(passport.session({ resave: false }));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
