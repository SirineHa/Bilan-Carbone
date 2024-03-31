//const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/Admin');

passport.use(new LocalStrategy(
  function(username, password, done) {
    Admin.findOne({ username: username })
      .then(admin => {
        if (!admin) { return done(null, false); }
        if (!admin.validatePassword(password)) { return done(null, false); }
        return done(null, admin);
      })
      .catch(err => done(err));
  }
));

passport.serializeUser(function(admin, done) {
  done(null, admin.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Admin.findById(id); // Utilisation de async/await
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;