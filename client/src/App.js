import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Accueil4 } from "./views/Accueil4";
import { NewAccueil } from "./views/NewAccueil";
import BilanNormalView from "./views/bilanNormalView";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil4 />} />
      <Route path="/new" element={<NewAccueil />} />
      <Route path="/bilan" element={<BilanNormalView />}/>
    </Routes>
  );
};

export default App;
