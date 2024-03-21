import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.css';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleResetPassword = async () => {
    setIsLoading(true);
    try {
      // Validation de l'e-mail
      if (!email || !email.includes('@')) {
        throw new Error('Veuillez entrer une adresse e-mail valide.');
      }
  
      // Envoyez une demande à votre serveur pour commencer le processus de réinitialisation du mot de passe
      const response = await fetch('http://localhost:5000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
      if (result.success) {
        setMessage('Veuillez vérifier votre boîte de réception pour les instructions de réinitialisation du mot de passe.');
      } else {
        setMessage('Une erreur s\'est produite. Veuillez réessayer.');
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h1>Réinitialiser le mot de passe</h1>
      <p>Veuillez entrer votre adresse e-mail pour réinitialiser votre mot de passe.</p>
      <input 
        type="email" 
        placeholder="Entrez votre mail"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
      <p>{message}</p>
    </div>
  );
};