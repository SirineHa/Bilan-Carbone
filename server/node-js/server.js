const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const app = express();
const PORT = 5000;

app.use(cors()); // Add this line
app.use(bodyParser.json());

// Dummy user data for demonstration purposes
const users = [
  { id: 1, username: 'user1@gmail.com', password: 'password1' },
  { id: 2, username: 'user2@gmail.com', password: 'password2' },
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.post('/reset-password', (req, res) => {
  const { email } = req.body;

  // Trouvez l'utilisateur par e-mail
  const user = users.find(u => u.username === email);

  if (user) {
    // Ici, on devrait normalement envoyer un e-mail à l'utilisateur avec un lien pour réinitialiser le mot de passe
    // Mais pour cette démo, nous allons simplement renvoyer un succès
    res.json({ success: true, message: 'Veuillez vérifier votre boîte de réception pour les instructions de réinitialisation du mot de passe.' });
  } else {
    res.status(404).json({ success: false, message: 'Aucun utilisateur trouvé avec cet e-mail.' });
  }
});