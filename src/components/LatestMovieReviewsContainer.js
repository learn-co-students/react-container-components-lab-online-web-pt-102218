import React, { Component } from 'react';
import 'isomorphic-fetch';
import { MovieReviews } from './MovieReviews'

const NYT_API_KEY = 'CG5NVmqi1UFalC59ZeB8YEMkcbbJpbF8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
  + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      reviews: []
    }
  }
  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            reviews: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }

  render() {
    const { error, isLoaded, reviews } = this.state
    if (error) {
      return <div className="error latest-movie-reviews">Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div className="latest-movie-reviews">Loading...</div>
    } else {
      return <div className="latest-movie-reviews" >
        <h1> HERE ARE THE LATEST REVIEWS MOVIE</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    }
  }
}