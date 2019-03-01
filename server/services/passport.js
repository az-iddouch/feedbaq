const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(usr => {
        if (usr) {
          // user already exists in the database
          done(null, usr);
        } else {
          new User({ googleId: profile.id }).save().then(newUser => done(null, newUser));
        }
      });
    }
  )
);

// vid 39
