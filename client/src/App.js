import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/LoginPage";
import Find from "./pages/Find";
import EventDetail from "./pages/EventDetail";
import NotFoundPage from "./components/NotFoundPage";
function App() {
  const login = true;
  const [theme, setTheme] = useState(``);

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      setTheme(localStorageTheme);
    } else {
      localStorage.setItem("theme", `light`);
      setTheme(`light`);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div id="theme-wrapper" className={`${theme} theme-changer`}>
      <Router>
        <div className="App">
          {login && <Navbar theme={theme} setTheme={setTheme}></Navbar>}
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/find" element={<Find />} />
            <Route path="/event" element={<EventDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
