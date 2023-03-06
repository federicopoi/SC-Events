import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/auth/LoginPage";
import Find from "./pages/Find";
import EventDetail from "./pages/EventDetail";
import NotFoundPage from "./components/NotFoundPage";
function App(props) {
  // const login = true;
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
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Navbar theme={theme} setTheme={setTheme}></Navbar>
            <Route exact path="/" component={Home}></Route>
            {/* <Route path="*" component={NotFoundPage} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/find" component={Find} />
            <Route path="/event" component={EventDetail} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
