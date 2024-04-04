import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Email } from "../../components/Email/Email";
import "./Login.css";

import man from "../../assets/img/man-working.png";
import logo from "../../assets/img/logo.png";
import ellipse from "../../assets/img/ellipse-1.svg";
import message from "../../assets/img/message-1.svg";
import padlock from "../../assets/img/padlock-1.svg";
import invisible from "../../assets/img/invisible-1.svg";


export const Login = () => {
  const navigate = useNavigate();  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginClick = async () => {
    // Simple fetch to the Node.js server
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    if (result.success) {
      navigate('/dashboard-admin');
    } else {
      console.log('Login failed. Invalid credentials.');
    }
  };


  const handleForgotPasswordClick = () => {
    // Redirect to the forgot password page
    navigate("/forgotPassword");
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
                          value={password} onChange={(e) => setPassword(e.target.value)}
                          Entrer votre Mot de passe
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
                    <div className={`email-container email-input`}>
                      <div className="email-label">
                        Email
                      </div>
                      <input 
                        className="email-input"
                        type="email" 
                        placeholder="Entrez votre mail"
                        value={username} onChange={(e) => setUsername(e.target.value)} 
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