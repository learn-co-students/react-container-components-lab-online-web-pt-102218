import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "6MkoCuAV0hNexEzZIEAt4ccMhO19j8oP";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { reviews: [], searchTerm: "" };
  }

  changeSearchTerm = e => this.setState({ searchTerm: e.target.value });

  searchReviews = (e) => {
    e.preventDefault()
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(res => this.setState({reviews:res.results}));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.searchReviews}>
          <input type="text" onChange={this.changeSearchTerm} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
