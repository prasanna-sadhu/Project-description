import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Generator from "./pages/Generator";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "true") {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/about"
            element={
              <About
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/dashboard"
            element={
              <Dashboard
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/login"
            element={
              <Login
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* Generator route for both Create and Edit */}
          <Route
            path="/generator"
            element={
              <Generator
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          {/* Edit route */}
          <Route
            path="/generator/:id"
            element={
              <Generator
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;