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
import RegisterPage from "./pages/auth/RegisterPage";
import Find from "./pages/Find";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import NotFoundPage from "./components/NotFoundPage";
import { loadUser } from "./store/actions/authActions";
import { connect } from "react-redux";

function App(props) {
  // const login = true;
  const [theme, setTheme] = useState(``);

  useEffect(() => {
    props.store.dispatch(loadUser());
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
          <Navbar theme={theme} setTheme={setTheme} user={props.user}></Navbar>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/find" element={<Find />} />
            <Route path="/event" element={<EventDetail />} />
            <Route path="/newEvent" element={<NewEvent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});
export default connect(mapStateToProps)(App);
