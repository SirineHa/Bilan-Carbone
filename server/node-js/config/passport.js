const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/Admin');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async function(email, password, done) { // Marquez la fonction comme asynchrone
  try {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return done(null, false, { message: 'Cet email n\'est pas enregistré.' });
    }
    // Utilisez await pour attendre le résultat de validatePassword
    const isMatch = await admin.validatePassword(password);
    if (!isMatch) {
      return done(null, false, { message: 'Mot de passe incorrect.' });
    }
    return done(null, admin);
  } catch (err) {
    return done(err);
  }
}));


passport.serializeUser(function(admin, done) {
  done(null, admin.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Admin.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;