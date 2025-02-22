import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio1 from "./pages/Portfolio1";
import Portfolio2 from "./pages/Portfolio2";
import Portfolio3 from "./pages/Portfolio3";
import Contact from "./pages/Contact";
import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" || false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <BrowserRouter>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/portfolio1"
            element={<Portfolio1 darkMode={darkMode} />}
          />
          <Route
            path="/portfolio2"
            element={<Portfolio2 darkMode={darkMode} />}
          />
          <Route
            path="/portfolio3"
            element={<Portfolio3 darkMode={darkMode} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
