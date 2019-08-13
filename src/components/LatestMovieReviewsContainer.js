import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "6MkoCuAV0hNexEzZIEAt4ccMhO19j8oP";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { reviews: [] };
  }
  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }
  render() {
    return (
      <ul className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}  />
      </ul>
    );
  }
}
