import React from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctorName, speciality, onFeedbackClick }) => {
  return (
    <div className="review-row">
      <span>{doctorName}</span>
      <span>{speciality}</span>
      <button onClick={onFeedbackClick}>Click Here</button>
    </div>
  );
};

export default ReviewForm;
