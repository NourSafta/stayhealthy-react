import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology' },
    { id: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology' }
  ];

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
                <button className="feedback-btn">
                  Click Here
                </button>
              </td>
              <td></td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
