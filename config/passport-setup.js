require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   db.User.findOne({ where: { id: id } }).then(function(user) {
//     done(null, user);
//   });
// });

//options for the google strategy
passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    () => {
      // passport cb funciton
    }
  )
);
//     function(accessToken, refreshToken, profile, done) {
//       //check if User already exists in our database
//       db.User.findOne({ where: { googleID: profile.id } }).then(function(
//         currentUser
//       ) {
//         if (currentUser) {
//           //already have user
//           console.log("user is ", currentUser);
//           done(null, currentUser);
//         } else {
//           //if not, create new user in db
//           db.User.create({
//             firstName: profile.name.givenName,
//             lastName: profile.name.familyName,
//             googleID: profile.id
//           }).then(function(newUser) {
//             console.log(newUser);
//             done(null, newUser);
//           });
//         }
//       });
//     }
//   )
// );
