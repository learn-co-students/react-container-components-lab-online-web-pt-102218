import React from 'react'



const MovieReviews = (props) =>
  <div className= "review-list">
     {props.reviews.map((review) => {
       return (
         <div className= 'review'>
          <a href={review.link.url}>{review.headline}</a>
        </div>
       )
     })}
  </div>

  export default MovieReviews
