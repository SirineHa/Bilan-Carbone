require('dotenv').config(); // Ajoutez cette ligne en haut de votre fichier
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport'); // Ajoutez cette ligne
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy user data for demonstration purposes
const users = [
  { id: 1, username: 'bary.abdoulaye@gmail.com', password: 'password1' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username and password (Note: This is just for demo, not secure)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Ajoutez cette fonction
async function sendResetPasswordEmail(user) {
  let transporter = nodemailer.createTransport(sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY // Remplacez votre clé API SendGrid par cette ligne
    },
  }));

  let info = await transporter.sendMail({
    from: '"Bilan Carbonne" <bilancarbonneinfo2@gmail.com>', // Assurez-vous que cette adresse e-mail est vérifiée
    to: user.username, // Assurez-vous que cet utilisateur s'est inscrit pour recevoir des e-mails
    subject: 'Réinitialisation du mot de passe',
    text: 'Bonjour, \nPour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant : http://localhost:3000/reset-password/' + user.id,
});


  console.log('Message sent: %s', info.messageId);
}

app.post('/reset-password', (req, res) => {
  const { email } = req.body;

  // Find user by email
  const user = users.find(u => u.username === email);

  if (user) {
    // Send an email to the user with a link to reset the password
    sendResetPasswordEmail(user).catch(console.error);

    res.json({ success: true, message: 'Please check your inbox for password reset instructions.' });
  } else {
    res.status(404).json({ success: false, message: 'No user found with that email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});