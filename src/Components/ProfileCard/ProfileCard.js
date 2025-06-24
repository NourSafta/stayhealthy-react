import React from "react";
import "./ProfileCard.css";
import { Link } from "react-router-dom";


const ProfileCard = () => {

  return (
    <div className="profile-card-dropdown">
      <p className="profile-link"><Link to="/profileform">Your Profile</Link></p>
      <p className="profile-link"><Link to="/reports">Your Reports</Link></p>

    </div>
  );
};

export default ProfileCard;
