import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <p>Already a member? <Link to="/login">Login</Link></p>
      <form>
        <label>Email</label>
        <div className="input-icon">
          <i className="fa fa-envelope"></i>
          <input type="email" placeholder="user@gmail.com" required />
        </div>

        <label>Name</label>
        <div className="input-icon">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="user.test" required />
        </div>

        <label>Phone</label>
        <input type="tel" required />

        <label>Role</label>
        <select required>
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>

        <label>Password</label>
        <div className="input-icon">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="*********"
            required
          />
          <i
            className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
