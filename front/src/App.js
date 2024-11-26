import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"; 
import Login from "./pages/login/in/index.jsx";
import LoginUp from "./pages/login/up"
import Temp from "./pages/temp"
import Contador from "./pages/cont/index.jsx";
import Umidade from "./pages/umid/index.jsx";
import Luminosidade from "./pages/lumi/index.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/temperatura" element={<Temp />} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/umidade" element={<Umidade/>} />
        <Route path="/luminosidade" element={<Luminosidade/>} />
        <Route path="/login/up" element={<LoginUp />} />
      </Routes>
    </Router>
  );
};

export default App;
