const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/Admin');

passport.use(new LocalStrategy({
  usernameField: 'email', // Utilisez 'email' au lieu de 'username' comme champ d'identification
  passwordField: 'password' // Optionnel si vous utilisez 'password' par défaut
},
function(email, password, done) {
  Admin.findOne({ email: email }) // Recherche par 'email' au lieu de 'username'
    .then(admin => {
      if (!admin) {
        return done(null, false, { message: 'Cet email n\'est pas enregistré.' });
      }
      if (!admin.validatePassword(password)) {
        return done(null, false, { message: 'Mot de passe incorrect.' });
      }
      return done(null, admin);
    })
    .catch(err => done(err));
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