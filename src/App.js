import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import Reviews from "./Components/Reviews/Reviews"; 
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from './Components/Profile/ProfileForm';
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";

function App() {
  return (
    <Notification>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="/booking-consultation" element={<BookingConsultation />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviewform" element={<ReviewForm />} />
        <Route path="/profileform" element={<ProfileForm />} />
        <Route path="/reports" element={<ReportsLayout />} />
      </Routes>
    </Notification>
  );
}

export default App;
