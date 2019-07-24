import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

let searchTerm = ''
const NYT_API_KEY = 'z8Pp9dk8cuJxlRH0OfsGYUYnxEBUuKVk';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}` + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&` + `api-key=${NYT_API_KEY}`)
    .then(response => response.json()).then(data => {
      debugger
      this.setState({
        reviews: data.results
      })
    })
  }
  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Term
            <input type='text' name='searchTerm' value={this.searchTerm} onChange={this.handleChange}></input>
          </label>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
