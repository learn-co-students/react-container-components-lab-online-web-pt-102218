import React, { Component } from 'react';
import 'isomorphic-fetch';
import { MovieReviews } from './MovieReviews'

const NYT_API_KEY = 'CG5NVmqi1UFalC59ZeB8YEMkcbbJpbF8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
// + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
      reviews: []
    })
  }

  submitSearch = (event) => {
    event.preventDefault();
    const fetchURL = URL + `query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`
    fetch(fetchURL)
      .then(resp => {
        if (resp.status >= 400) {
          throw new Error(`Bad response from server: ${resp.status} ${resp.statusText}, type: ${resp.type}`);
        }
        return resp.json();
      })
      .then(json => {
        this.setState({
          reviews: json.results
        })
      })
  }

  render() {
    return <div className="searchable-movie-reviews">
      <h1>HAVE SOME SEARCH</h1>
      <form onSubmit={this.submitSearch}>
        <input className="search" id="search" onChange={this.handleChange} value={this.state.searchTerm} ></input>
        <button className="submit" id="submit-search" onClick={this.submitSearch}>Submit Search</button>
      </form>
      <br />
      <MovieReviews reviews={this.state.reviews} />
    </div>
  }
}