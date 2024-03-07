import React from "react";
import { useNavigate } from "react-router-dom";
import { Email } from "../../components/Email/Email";
import "./Login.css";

import man from "../../img/man-working.png";
import logo from "../../img/logo.png";
import ellipse from "../../img/ellipse-1.svg";
import padlock from "../../img/padlock-1.svg";
import invisible from "../../img/invisible-1.svg";


export const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the admin page
    navigate("/adminPage");
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
                    <Email className="email-input" />
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