const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const Admin = require('../models/Admin');

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

router.post('/login', passport.authenticate('local'), function(req, res) {
  if (req.user) {
    console.log('Login successful');
    res.json({ success: true, message: 'Login successful' });
  } else {
    console.log('Login failed');
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

router.post('/reset-password', (req, res) => {
  const { email } = req.body;

  Admin.findOne({ username: email })
    .then(admin => {
      if (!admin) { return res.status(404).json({ success: false, message: 'No admin found with that email.' }); }

      sendResetPasswordEmail(admin).catch(console.error);

      res.json({ success: true, message: 'Please check your inbox for password reset instructions.' });
    })
    .catch(err => res.status(500).json({ success: false, message: 'An error occurred.' }));
});

module.exports = router;