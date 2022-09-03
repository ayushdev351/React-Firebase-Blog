import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };

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

        {!isAuth ? (
          <Link
            className="navBtn"
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </Link>
        ) : (
          <button className="logOutBtn" onClick={signOutUser}>
            Logout
          </button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
