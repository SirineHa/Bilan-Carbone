const sgMail = require('@sendgrid/mail');

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

module.exports = { sendResetPasswordEmail };