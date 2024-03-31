import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequestReset } from './components/ResetPassword/RequestReset';
import { PerformReset } from "./components/ResetPassword/PerformReset";

import "./App.css";

import { Accueil4 } from "./views/Accueil4";
import { NewAccueil } from "./views/NewAccueil";
import { Login } from "./components/Login/Login";
import BilanExpressView from "./views/bilanExpressView";
import BilanNormalView from "./views/bilanNormalView";
import { AdminScreen } from "./views/AdminScreen";

import { useState, useEffect } from 'react';

// Composant ProtectedRoute pour sécuriser les routes
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Vérifie si l'utilisateur est authentifié dès que l'application est chargée
    const checkAuthentication = async () => {
      try {
        const response = await fetch('http://localhost:5000/dashboard-admin', {
          method: 'GET',
          credentials: 'include', // Important pour inclure les cookies de session dans la requête
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          throw new Error('Not authenticated');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Affiche un message de chargement pendant la vérification de l'authentification
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil4 />} />
      <Route path="/new" element={<NewAccueil />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard-admin"
        element={
          <ProtectedRoute>
            <AdminScreen />
          </ProtectedRoute>
        }
      />
      <Route path="/resetPassword" element={<RequestReset />} />
      <Route path="/reset-password/:token" element={<PerformReset />} />
      
      <Route path="/bilan/normal" element={<BilanNormalView />}/>
      <Route path="/bilan/express" element={<BilanExpressView />}/>
    </Routes>
  );
};

export default App;
