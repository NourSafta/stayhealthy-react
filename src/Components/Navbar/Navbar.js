import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const name = sessionStorage.getItem("name");
  const isLoggedIn = sessionStorage.getItem("auth-token");

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="StayHealthy Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/blog">Health Blog</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <span className="user-name">{name?.split("@")[0]}</span>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup"><button className="signup">Sign Up</button></Link>
            <Link to="/login"><button className="login">Login</button></Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
