import React from "react";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div className="profile-card-dropdown" onClick={handleClick}>
      <p className="profile-link">Your Profile</p>
    </div>
  );
};

export default ProfileCard;
