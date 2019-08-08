import React from 'react';

export default function MovieReviews(props){
	return <div className="review-list" style={{display: "flex", flexWrap: "wrap"}}>

		{props.reviews.map(review => {
			let hasRating = ["R", "G", "PG", "PG-13"].includes(review.mpaa_rating)
			let ratingIcon
			if(hasRating){
				ratingIcon = (
					review.mpaa_rating === "R" ? "https://upload.wikimedia.org/wikipedia/commons/7/7e/RATED_R.svg" :
					review.mpaa_rating === "G" ? "https://upload.wikimedia.org/wikipedia/commons/0/05/RATED_G.svg" :
					review.mpaa_rating === "PG" ? "https://upload.wikimedia.org/wikipedia/commons/b/bc/RATED_PG.svg" :
					review.mpaa_rating === "PG-13" ? "https://upload.wikimedia.org/wikipedia/commons/c/c0/RATED_PG-13.svg" :
					""
				)
			}

			return <a className="review" href={review.link.url} key={review.display_title} style={{ color: "black", textDecoration: "none"}}>
				<div style={{width: review.multimedia.width * 2, height: review.multimedia.height * 4, margin: "1.25em", boxShadow: "black 5px 5px 20px -5px"}}>
					<img src={review.multimedia.src} width={review.multimedia.width * 2} alt={`${review.display_title} - Cover Photo`}/>
					<div style={{padding: "0 1.15em 1.15em"}}>
						<div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
							<h2>{review.display_title}</h2>
							{hasRating && <img alt={`Rated ${review.mpaa_rating}`} width="75px" style={{transform: "rotate(10deg)", marginTop: "-2em"}} src={ratingIcon} />}
						</div>
						<h3>{review.headline}</h3>
						<p>{review.summary_short}</p>
					</div>
				</div>
			</a>
	
		})}
	</div>
}
