import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RequestReset.css'; // Assurez-vous que ce fichier est bien lié

export const RequestReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    setIsLoading(true);
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        throw new Error('Veuillez entrer une adresse e-mail valide.');
      }
  
      const response = await fetch('http://localhost:5000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
      setMessage(result.message || 'Veuillez vérifier votre boîte de réception pour les instructions de réinitialisation du mot de passe.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="request-reset-container">
      <h1>Réinitialisation du mot de passe</h1>
      <p>Veuillez entrer votre adresse e-mail pour recevoir les instructions de réinitialisation du mot de passe.</p>
      <input 
        className="email-input"
        type="email" 
        placeholder="Adresse e-mail"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button 
        className="submit-button" 
        onClick={handleResetPassword} 
        disabled={isLoading}>
        {isLoading ? 'Envoi en cours...' : 'Envoyer les instructions'}
      </button>
      <p className="message">{message}</p>
    </div>
  );
};
