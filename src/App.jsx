import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import Contacto from "./views/Contacto";
import { NavBarComponent } from "./components/NavBarComponent";

const App = () => {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element="Route Not found" />
      </Routes>
    </div>
  );
};
export default App;
