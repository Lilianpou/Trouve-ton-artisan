import React from "react";

function StarRating({ rating, maxStars = 5 }) {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-warning">
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-muted">
          ☆
        </span>
      );
    }
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
