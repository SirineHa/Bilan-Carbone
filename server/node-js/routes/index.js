const express = require('express');
const router = express.Router();
const localPassport = require('../config/passport');
const crypto = require('crypto'); // Ajout pour la génération de token
const nodemailer = require('nodemailer');
const Admin = require('../models/Admin');
const sgMail = require('@sendgrid/mail');
const bcrypt = require('bcrypt');


// Middleware pour vérifier si l'utilisateur est authentifié
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).send({ message: 'Accès refusé. Utilisateur non authentifié.' });
  }
}

router.get('/dashboard-admin', ensureAuthenticated, (_, res) => {
  res.json({ message: 'Vous êtes authentifié.' });
});

router.post('/login', localPassport.authenticate('local'), (req, res) => {
  res.json({ success: true, message: 'Connexion réussie.' });
});

// Route pour demander la réinitialisation du mot de passe
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const admin = await Admin.findOne({ email: email }); 
    console.log('Admin found:', admin);
    if (!admin) {
      return res.status(200).json({ message: 'Si votre compte existe, un email a été envoyé.' });
    }
    
    // Générer un token de réinitialisation
    const resetToken = crypto.randomBytes(20).toString('hex');
    // Stocker le token hashé (pour des raisons de sécurité) dans la base de données
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    admin.resetPasswordToken = hashedToken;
    admin.resetPasswordExpires = Date.now() + 3600000; // 1 heure
    await admin.save();
    console.log('Admin saved:', admin);
    
    // Envoyer l'email
    await sendResetPasswordEmail(admin, resetToken); // Notez l'utilisation du token non hashé ici
    console.log('Email sent');
    
    res.status(200).json({ message: 'Si votre compte existe, un email a été envoyé.' });
  } catch (err) {
    console.error('Error in /forgot-password:', err);
    res.status(500).json({ message: 'Une erreur s’est produite.' });
  }
});

// Fonction pour envoyer l'email
async function sendResetPasswordEmail(admin, token) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const resetURL = `http://localhost:3000/reset-password/${token}`;

  const msg = {
    to: admin.email,
    from: 'bilancarbonneinfo2@gmail.com',
    subject: 'Réinitialisation du mot de passe',
    html: `Bonjour, <br> Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant: <a href="${resetURL}">Réinitialiser le mot de passe</a>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending reset password email', error);
    if (error.response) {
      console.error(error.response.body)
    }
  }
}


router.get('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  const admin = await Admin.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() }
  });

  if (!admin) {
    return res.status(400).json({ message: 'Token invalide ou expiré.' });
  }

  // Redirection vers la page de réinitialisation du mot de passe (optionnel)
  // Exemple: res.redirect(`http://localhost:3000/new-password/${token}`);
  res.redirect(`http://localhost:3000/new-password/${token}`);
});



router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body; // Assurez-vous de valider et de sécuriser ce mot de passe
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  try {
    const admin = await Admin.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!admin) {
      return res.status(400).json({ message: 'Token de réinitialisation invalide ou expiré.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hasher le nouveau mot de passe
    admin.password = hashedPassword; // Mettez à jour le mot de passe ici
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpires = undefined;
    await admin.save(); // Sauvegarde les modifications dans la base de données

    // Envoyer un email de confirmation ici si nécessaire

    res.json({ message: 'Le mot de passe a été réinitialisé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la réinitialisation du mot de passe.' });
  }
});

module.exports = router;
