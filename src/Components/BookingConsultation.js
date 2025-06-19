import React, { useEffect, useState } from 'react';
import FindDoctorSearch from './InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCard from './InstantConsultationBooking/DoctorCardIC/DoctorCardIC';
import './BookingConsultation.css'; 

const BookingConsultation = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const fetchDoctors = () => {
    fetch('https://api.npoint.io/9a5543d36f1460da2f63')
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(err => console.error(err));
  };

  const handleSearch = (speciality) => {
    const filtered = doctors.filter(doc =>
      doc.speciality.toLowerCase().includes(speciality.toLowerCase())
    );
    setFilteredDoctors(filtered);
    setIsSearched(true);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="booking-consultation-container">
      <FindDoctorSearch onSearch={handleSearch} />
      {isSearched && (
        <div className="doctor-list">
          <h3>{filteredDoctors.length} doctor(s) found</h3>
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingConsultation;
