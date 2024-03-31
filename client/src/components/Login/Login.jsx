import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Email } from "../../components/Email/Email";
import "./Login.css";

import man from "../../img/man-working.png";
import logo from "../../img/logo.png";
import ellipse from "../../img/ellipse-1.svg";
import message from "../../img/message-1.svg";
import padlock from "../../img/padlock-1.svg";
import invisible from "../../img/invisible-1.svg";

export const Login = () => {
  const navigate = useNavigate();  
  const [email, setEmail] = useState(''); // Changement de 'username' à 'email'
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLoginClick = async (event) => {
    event.preventDefault(); // Pour éviter le rechargement de la page
    console.log(`Tentative de connexion avec l'email : ${email} et le mot de passe : ${password}`);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        credentials: 'include', // Important pour inclure les cookies de session dans la requête
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Utiliser 'email' au lieu de 'username'
      });
  
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas correcte');
      }
  
      const result = await response.json();
      console.log('Réponse de l\'API :', result);
      if (result.success) {
        console.log('Connexion réussie. Redirection vers le tableau de bord.');
        navigate('/dashboard-admin');
      } else {
        console.log('Échec de la connexion. Identifiants invalides.');
        setErrorMessage('Le mot de passe ou l\'e-mail est incorrect');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
    }
  };
  


  const handleInputChange = () => {
    setErrorMessage(''); // réinitialise le message d'erreur
  };
  
  const handleForgotPasswordClick = () => {
    // Redirect to the forgot password page
    navigate("/resetPassword");
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-content">
          <div className="login-inner-content">
            {/* <Footer
              className="footer"
              copyrightClassName="copyright"
              hasSocialLinks={false}
            /> */}
            <div className="login-form-container">
              <div className="login-form">
                <div className="login-form-inner">
                <button onClick={handleLoginClick} className="login-button">
                    <div className="login-button-inner">
                      <div className="login-button-text">
                        Login
                      </div>
                    </div>
                  </button>
                  <div className="error-message">
                    {errorMessage}
                  </div>
                  <div className="forgot-password" onClick={handleForgotPasswordClick}>
                    <div className="forgot-password-text">
                      Mot de passe oublié
                    </div>
                  </div>
                  <div className="password-input-container">
                    <div className="password-input">
                      <div className="password-label">
                        Mot de passe
                      </div>
                      <div className="password-line" />
                      <div className="password-field">
                        <input className="password-placeholder"
                          type="password"
                          placeholder="Entrer votre Mot de passe"
                          value={password} onChange={(e) => {
                            setPassword(e.target.value);
                            handleInputChange(); // Ajoutez ceci
                          }}
                          //Entrer votre Mot de passe
                        />
                        <img
                          className="password-icon"
                          alt="Padlock"
                          src={padlock} 
                        />
                      </div>
                      {/* <img
                        className="invisible-icon"
                        alt="Invisible"
                        src="/img/invisible-1.svg"
                      /> */}
                      
                    </div>
                    <div className={`email-container email-input-l`}>
                      <div className="email-label">
                        Email
                      </div>
                      <input 
                        className="email-input-l"
                        type="email" 
                        placeholder="Entrez votre mail"
                        value={email} onChange={(e) => {
                          setEmail(e.target.value);
                          handleInputChange(); 
                        }}
                      />
                      <div className="email-line" />
                      <img className="email-icon" alt="Message" src={message} />
                  </div>
                  </div>
                </div>
                
                <div className="admin-login">
                  <div className="admin-login-text">
                    Connexion Admin
                  </div>
                </div>
              </div>
              
            </div>
            <img className="ellipse-image" alt="Ellipse" src={ellipse} />
            <img
              className="working-man-image"
              alt="Man working"
              src={man}
            />
          </div>
          <img className="logo-image" alt="Logo" src={logo} />
        </div>
      </div>
    </div>
  );
};