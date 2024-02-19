import React from "react";

const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? "filled" : ""}>
      &#9733;
    </span>
  ));

  return <div className="star-rating">{filledStars}</div>;
};

export default StarRating;