// Code MovieReviews Here
import React from 'react';

function MovieReviews(props) {
  return ( 
  <div className="review-list">
     {props.reviews.map((review, i) => {
       return (
         <div key={i} className="review">
           {review.display_title}

           </div>  
       )
     } )}
  </div>
        )
    
}

export default MovieReviews