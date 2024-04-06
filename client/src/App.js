import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Accueil4 } from "./views/Accueil4";
import { NewAccueil } from "./views/NewAccueil";
import { Login } from "./components/Login/Login";
import BilanExpressView from "./views/bilanExpressView";
import BilanNormalView from "./views/bilanNormalView";
import { AdminScreen } from "./views/AdminScreen";
import { AdminScreentest } from "./views/AdminScreentest";
import { AddAvis }from "./views/AddAvis";
import { AvisScreen }from "./views/AvisScreen";
import { StatsScreen } from "./views/StatsScreen";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil4 />} />
      <Route path="/new" element={<NewAccueil />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard-admin" element={<AdminScreen />} />   
      <Route path="/admintest" element={<AdminScreentest />} />   
      <Route path="/bilan/normal" element={<BilanNormalView />}/>
      <Route path="/bilan/express" element={<BilanExpressView />}/>
      <Route path="/add-avis" element={<AddAvis/>}/>
      <Route path="/data-avis" element={<AvisScreen/>}/>
      <Route path="/data-stats" element={<StatsScreen/>}/>
    </Routes>
  );
};

export default App;
