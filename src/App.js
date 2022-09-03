import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <nav className="myNavbar">
        <Link
          className="navBtn"
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          Home
        </Link>
        <Link
          className="navBtn"
          to="/createpost"
          style={{ textDecoration: "none", color: "black" }}
        >
          Create Post
        </Link>
        <Link
          className="navBtn"
          to="/login"
          style={{ textDecoration: "none", color: "black" }}
        >
          Login
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
