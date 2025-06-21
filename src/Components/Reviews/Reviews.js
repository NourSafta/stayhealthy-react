import React from 'react';
import './Reviews.css';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology' }
  ];

  const storedReviews = JSON.parse(localStorage.getItem("doctorReviews") || "{}");

  return (
    <div className="reviews-page">
      <h2>Reviews</h2>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc, index) => (
            <tr key={doc.id}>
              <td>{index + 1}</td>
              <td>{doc.name}</td>
              <td>{doc.speciality}</td>
              <td>
                {storedReviews[doc.name] ? (
                    <button className="feedback-btn" disabled style={{ backgroundColor: '#ccc', cursor: 'not-allowed' }}>
                    Click Here
                    </button>
                ) : (
                    <Link to="/reviewform" state={{ doctorName: doc.name }}>
                    <button className="feedback-btn">Click Here</button>
                    </Link>
                )}
              </td>

              <td>{storedReviews[doc.name] || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
