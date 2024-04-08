import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PerformReset.css";

export const PerformReset = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validations séparées pour chaque critère
  const isValidLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&]/.test(password);

  const validatePassword = () => {
    if (
      !isValidLength ||
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumber ||
      !hasSpecialChar
    ) {
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

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `http://localhost:5000/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      const result = await response.json();
      setMessage(result.message);

      if (result.success) {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h1>Réinitialiser le mot de passe</h1>
      <div className="password-input-container">
        <input
          className="reset-input"
          type={showPassword ? "text" : "password"}
          placeholder="Entrez votre nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="show-password-button"
        >
          {showPassword ? "Masquer" : "Afficher"}
        </button>
      </div>
      <ul className="password-criteria">
        {[
          { test: isValidLength, text: "Au moins 8 caractères" },
          { test: hasUpperCase, text: "Une lettre majuscule" },
          { test: hasLowerCase, text: "Une lettre minuscule" },
          { test: hasNumber, text: "Un chiffre" },
          { test: hasSpecialChar, text: "Un caractère spécial (@$!%*?&)" },
        ].map(({ test, text }, index) => (
          <li key={index} style={{ color: test ? "green" : "red" }}>
            {test ? "✅" : "❌"} {text}
          </li>
        ))}
      </ul>
      <div className="confirm-password-input-container">
        <input
          className="reset-input"
          type="password"
          placeholder="Confirmez votre nouveau mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        className="reset-button"
        onClick={handleResetPassword}
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "⏳Réinitialisation..."
          : "Réinitialiser le mot de passe"}
      </button>
      <p>{message}</p>
    </div>
  );
};
