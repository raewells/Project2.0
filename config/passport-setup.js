require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const db = require("../models");

passport.serializeUser(function(users, done) {
  done(null, users.username);
});

passport.deserializeUser(function(username, done) {
  db.Users.findOne({ where: { username: username } }).then(function(users) {
    done(null, users);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    function(accessToken, refreshToken, profile, done) {
      //check if User already exists in our database
      db.Users.findOne({ where: { googleID: profile.id } }).then(function(
        currentUser
      ) {
        if (currentUser) {
          //already have user
          console.log("user is ", currentUser);
          done(null, currentUser);
        } else {
          db.Users.create({
            username: profile.displayName,
            first_name: profile.name.givenName,
            last_name: profile.name.familyName,
            googleId: profile.id
          }).then(function(newUsers) {
            console.log(newUsers);
            done(null, newUsers);
          });
        }
      });
    }
  )
);
