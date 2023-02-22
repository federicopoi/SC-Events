import "./App.css";
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
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/find" element={<Find />} />
          <Route path="/event" element={<EventDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
