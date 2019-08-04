// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(review => {
        return(
            <div className="review">
                <a href={review.link.url}>{review.headline}</a>
            </div>
        )
        })}
    </div>
)

export default MovieReviews