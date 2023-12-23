// StarRating.jsx

import React from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starColor = index < rating ? "#ffc107" : "#e4e5e9";
    return (
      <span key={index}>
        {index < rating ? (
          <FaStar style={{ color: starColor }} />
        ) : (
          <FaRegStar style={{ color: starColor }} />
        )}
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;
