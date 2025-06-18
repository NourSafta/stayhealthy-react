import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate } from 'react-router-dom';

const specialities = [
  'Dentist',
  'Gynecologist/obstetrician',
  'General Physician',
  'Dermatologist',
  'Ear-nose-throat (ent) Specialist',
  'Homeopath',
  'Ayurveda'
];

const FindDoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleFocus = () => setDropdownVisible(true);
  const handleBlur = () => setTimeout(() => setDropdownVisible(false), 150);

  const handleSpecialityClick = (speciality) => {
    setSearchTerm(speciality);
    navigate(`/instant-consultation?speciality=${encodeURIComponent(speciality)}`);
  };

  const filteredSpecialities = specialities.filter((spec) =>
    spec.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doctor-search-section">
      <div className="doctor-illustration">
        <img src={`${process.env.PUBLIC_URL}/doctor-illustration.png`} alt="Doctor Illustration" />
      </div>

      <h2 className="doctor-search-title">Search a Doctor by Specialty</h2>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search doctors, clinics, hospitals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="search-icon">
          <img src={`${process.env.PUBLIC_URL}/search.png`} alt="search" />
        </div>
        {isDropdownVisible && (
          <div className="search-dropdown">
            {filteredSpecialities.map((spec) => (
              <div
                className="search-item"
                key={spec}
                onMouseDown={() => handleSpecialityClick(spec)}
              >
                <span className="item-icon">
                  <img src={`${process.env.PUBLIC_URL}/search.png`} alt="search icon" />
                </span>
                <span>{spec}</span>
                <span className="item-label">SPECIALITY</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctorSearch;
