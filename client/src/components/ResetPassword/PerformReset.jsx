import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PerformReset.css';

export const PerformReset = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Validations séparées pour chaque critère
  const isValidLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  const validatePassword = () => {
    if (!isValidLength || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      setMessage("Le mot de passe ne respecte pas tous les critères requis.");
      return false;
    }

    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
      return false;
    }

    return true;
  };

  const handleResetPassword = async () => {
    if (!validatePassword()) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();
      setMessage(result.message);

      if (result.success) {
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      setMessage('Une erreur s\'est produite. Veuillez réessayer.');
    }
  };

  return (
    <div className="reset-password-container">
      <h1>Réinitialiser le mot de passe</h1>
      <input 
        className="reset-input"
        type="password" 
        placeholder="Entrez votre nouveau mot de passe"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {/* Affichage des critères de validation du mot de passe */}
      <ul>
        <li style={{ color: isValidLength ? 'green' : 'red' }}>Au moins 8 caractères</li>
        <li style={{ color: hasUpperCase ? 'green' : 'red' }}>Une lettre majuscule</li>
        <li style={{ color: hasLowerCase ? 'green' : 'red' }}>Une lettre minuscule</li>
        <li style={{ color: hasNumber ? 'green' : 'red' }}>Un chiffre</li>
        <li style={{ color: hasSpecialChar ? 'green' : 'red' }}>Un caractère spécial (@$!%*?&)</li>
      </ul>
      <input 
        className="reset-input"
        type="password" 
        placeholder="Confirmez votre nouveau mot de passe"
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
      />
      <button className="reset-button" onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
      <p>{message}</p>
    </div>
  );
};
