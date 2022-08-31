import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />
      </Routes>
    </div>
  );
};

export default App;
