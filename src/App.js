import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import React, { useState, useEffect } from "react";
import NotFound from "./pages/NotFound";

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
            path="/portfolio/:id"
            element={<Portfolio darkMode={darkMode} />}
          ></Route>
          <Route
            path="*"
            element={<NotFound darkMode={darkMode}></NotFound>}
          ></Route>
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
