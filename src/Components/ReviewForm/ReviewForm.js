import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReviewForm.css';

const ReviewForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const doctorName = location.state?.doctorName || '';

  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      const stored = JSON.parse(localStorage.getItem('doctorReviews')) || {};
      stored[doctorName] = {
        name: formData.name,
        review: formData.review,
        rating: formData.rating
      };
      localStorage.setItem('doctorReviews', JSON.stringify(stored));
      navigate('/reviews');
    } else {
      alert('Please fill in all fields and select a rating.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Give Your Review for {doctorName}</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <textarea
        name="review"
        placeholder="Review"
        value={formData.review}
        onChange={handleChange}
      />
      <div className="rating">
        <label>Rating:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              color: star <= formData.rating ? 'gold' : '#ccc'
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
