import React from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={rating >= star ? "filled" : "empty"}
          onClick={() => onRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
