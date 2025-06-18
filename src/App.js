import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
      </Routes>
    </>
  );
}

export default App;
