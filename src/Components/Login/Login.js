import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Are you a new member? <Link to="/signup">Sign Up</Link></p>
      <form>
        <label>Email</label>
        <div className="input-icon">
          <i className="fa fa-envelope"></i>
          <input type="email" placeholder="user@gmail.com" required />
        </div>

        <label>Password</label>
        <div className="input-icon">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="*********"
            required
          />
          <i
            className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          ></i>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
