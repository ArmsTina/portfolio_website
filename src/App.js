import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio1 from "./pages/Portfolio1";
import Portfolio2 from "./pages/Portfolio2";
import Portfolio3 from "./pages/Portfolio3";
import Contact from "./pages/Contact";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio1" element={<Portfolio1 />} />
        <Route path="/portfolio2" element={<Portfolio2 />} />
        <Route path="/portfolio3" element={<Portfolio3 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
