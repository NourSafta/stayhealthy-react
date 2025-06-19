import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, phone, password }),
      });

      const data = await response.json();

      if (data.authtoken) {
        sessionStorage.setItem("auth-token", data.authtoken);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("phone", phone);
        navigate("/");
        window.location.reload();
      } else {
        setErrorMsg(data.error || "Registration failed.");
      }
    } catch (err) {
      setErrorMsg("Server error. Please try again.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <p>
          Already a member? <Link to="/login">Login</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <div className="input-icon">
            <i className="fa fa-envelope"></i>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="user@gmail.com"
            />
          </div>

          <label>Name</label>
          <div className="input-icon">
            <i className="fa fa-user"></i>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="user.test"
            />
          </div>

          <label>Phone</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="5012345678"
          />

          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>

          <label>Password</label>
          <div className="input-icon">
            <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="*********"
            />
            <i
                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
            ></i>
           </div>


          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
