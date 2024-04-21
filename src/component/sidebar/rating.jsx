import React from "react";

const Rating = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating); 
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; 
  const emptyStars = 5 - fullStars - halfStar; 

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full_${i}`} className="star-filled">★</span>);
  }
  if (halfStar) {
    stars.push(
      <span key="half" className="star-half">
        <span className="star-filled">★</span><span className="star-empty">☆</span>
      </span>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty_${i}`} className="star-empty">☆</span>);
  }

  return (
    <div className="rating" style={{ fontSize: "24px" }}>
      {stars} {reviewCount && <span className="rating-count">({reviewCount})</span>}
      <style>{`
          .rating {
              font-size: 24px;
              display: inline-block;
          }
          .star-filled, .star-empty {
              color: #ccc;
              position: relative;
              cursor: pointer;
              font-size: 24px;
              display: inline-block;
          }
          .star-filled {
              color: #ED7F10;
              z-index: 1;
          }
          .star-half .star-empty {
              color: #ccc;
              position: absolute;
              clip-path: inset(0 50% 0 0);
              z-index: 0;
          }
          .star-half .star-filled {
              clip-path: inset(0 50% 0 0);
              display: inline-block;
              z-index: 2;
          }
          .rating-count {
              margin-left: 10px;
              font-size: 16px; 
          }
      `}</style>
    </div>
  );
};

export default Rating;