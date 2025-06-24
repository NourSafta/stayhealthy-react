import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("name", email.split("@")[0]);

      navigate("/");
      window.location.reload();
    } else {
      setError(json.errors?.[0]?.msg || json.error || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <p>
          Are you a new member? <Link to="/signup">Sign Up</Link>
        </p>
        <form onSubmit={loginUser}>
          <label>Email</label>
          <div className="input-icon">
            <i className="fa fa-envelope"></i>
            <input
              type="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Password</label>
          <div className="input-icon">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              id="togglePassword"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>

          {error && <div style={{ color: "red", marginTop: "-10px" }}>{error}</div>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
