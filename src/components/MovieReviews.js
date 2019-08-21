// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => 
    <div className="review-list">
        {props.reviews.map((review) => {
            return (
                <div className="review">
                    <h1>Display Title: {review.display_title}</h1>
                    <h2>Headline: {review.headline}</h2>
                    <p>Summary Short: {review.summary_short}</p>
                    <a href={review.link.url}>{review.link.suggested_link_text}</a>
                </div>
            )
        })}
    </div>

export default MovieReviews