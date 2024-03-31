const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const Admin = require('../models/Admin');

// Middleware pour vérifier si l'utilisateur est authentifié en utilisant les sessions
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { // Utilise isAuthenticated() de passport pour vérifier la session
    return next();
  } else {
    res.status(401).send({ message: 'Accès refusé. Utilisateur non authentifié.' });
  }
}

router.get('/dashboard-admin', ensureAuthenticated, (_, res) => {
  // Votre code pour le tableau de bord ici
  res.json({ message: 'Vous êtes authentifié.' });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  // En cas de succès, passport crée une session pour l'utilisateur
  res.json({ success: true, message: 'Connexion réussie.' });
});

// Votre fonction sendResetPasswordEmail reste inchangée

router.post('/reset-password', (req, res) => {
  const { email } = req.body;

  Admin.findOne({ username: email })
    .then(admin => {
      if (!admin) { return res.status(404).json({ success: false, message: 'Aucun administrateur trouvé avec cet email.' }); }

      sendResetPasswordEmail(admin).catch(console.error);

      res.json({ success: true, message: 'Veuillez vérifier votre boîte de réception pour les instructions de réinitialisation du mot de passe.' });
    })
    .catch(err => res.status(500).json({ success: false, message: 'Une erreur s’est produite.' }));
});

async function sendResetPasswordEmail(user) {
  let transporter = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    },
  }));

  let info = await transporter.sendMail({
    from: '"Bilan Carbonne" <bilancarbonneinfo2@gmail.com>',
    to: user.username,
    subject: 'Réinitialisation du mot de passe',
    text: 'Bonjour, \nPour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant : http://localhost:3000/reset-password/' + user.id,
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = router;