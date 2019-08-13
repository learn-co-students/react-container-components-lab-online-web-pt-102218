// Code MovieReviews Here

import React from "react";

export default function MovieReviews(props) {
  return (
    <div className="review-list">
      {props.reviews.map((review, i) => (
        <div key={i} className="review">
          {review.display_title}
        </div>
      ))}
    </div>
  );
}

MovieReviews.defaultProps = {
  reviews: []
};
