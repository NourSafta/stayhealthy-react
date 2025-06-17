import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
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
        <Link to="/signup"><button className="signup">Sign Up</button></Link>
        <Link to="/login"><button className="login">Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
