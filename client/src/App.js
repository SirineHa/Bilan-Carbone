import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext"; 

import { RequestReset } from './components/ResetPassword/RequestReset';
import { PerformReset } from "./components/ResetPassword/PerformReset";
import { Login } from "./components/Login/Login";
import { Accueil4 } from "./views/Accueil4";
import { NewAccueil } from "./views/NewAccueil";
import BilanExpressView from "./views/bilanExpressView";
import BilanNormalView from "./views/bilanNormalView";
import { AdminScreen } from "./views/AdminScreen";

import "./App.css";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Accueil4 />} />
        <Route path="/new" element={<NewAccueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard-admin" element={<ProtectedRoute><AdminScreen /></ProtectedRoute>} />
        <Route path="/resetPassword" element={<RequestReset />} />
        <Route path="/reset-password/:token" element={<PerformReset />} />
        <Route path="/bilan/normal" element={<BilanNormalView />} />
        <Route path="/bilan/express" element={<BilanExpressView />} />
        <Route path="etoile" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;