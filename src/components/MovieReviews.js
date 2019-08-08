import React from 'react'
// Code MovieReviews Here

export const MovieReviews = (props) => {
  return <div className="review-list" >
    {!!props.reviews && props.reviews.map((review, index) => {
          return <div key={index} className="review">Review: {review.display_title}</div>
        })}
    </div>
}

MovieReviews.defaultProps = {
  review: ""
}