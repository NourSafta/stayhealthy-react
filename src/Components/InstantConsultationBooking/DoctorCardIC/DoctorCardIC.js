import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC';
import { v4 as uuidv4 } from 'uuid';

const DoctorCardIC = ({ name, speciality, experience, ratings }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => setShowModal(true);

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter(app => app.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentData, // includes name, phoneNumber, date, time
    };
    setAppointments([...appointments, newAppointment]);
    setShowModal(false);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/doctor1.jpg`}
            alt="Doctor"
            className="doctor-card-profile-img"
          />
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
      </div>

      <div className="doctor-card-options-container">
        <Popup
          trigger={
            <button
              className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}
              onClick={handleBooking}
            >
              {appointments.length > 0 ? 'Cancel Appointment' : 'Book Appointment'}
              <div>No Booking Fee</div>
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          <div className="popup-wrapper">
            <div className="popup-box">
              <div className="doctor-card-profile-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/doctor1.jpg`}
                  alt="Doctor"
                  className="doctor-card-profile-img"
                />
              </div>
              <div className="doctor-card-details">
                <div className="doctor-card-detail-name">{name}</div>
                <div className="doctor-card-detail-speciality">{speciality}</div>
                <div className="doctor-card-detail-experience">{experience} years experience</div>
                <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 className="appointment-booked-title">Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className="bookedInfo" key={appointment.id}>
                      <p><strong>Doctor:</strong> {name}</p>
                      <p><strong>Speciality:</strong> {speciality}</p>
                      <p><strong>Name:</strong> {appointment.name}</p>
                      <p><strong>Phone Number:</strong> {appointment.phoneNumber}</p>
                      <p><strong>Date of Appointment:</strong> {appointment.date}</p>
                      <p><strong>Time Slot:</strong> {appointment.time}</p>
                      <button
                        className="cancel-appointment-btn"
                        onClick={() => handleCancel(appointment.id)}
                      >
                        Cancel Appointment
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentFormIC
                  doctorName={name}
                  doctorSpeciality={speciality}
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default DoctorCardIC;
