import React from 'react'

const MovieReviews = ({ reviews }) => {
  
  return (
    <ul className="review-list">
    { reviews.map((review, index) => 
      <li className="review" key={index}>
       {review.display_title}</li>)}
    </ul>
  )
}

export default MovieReviews

