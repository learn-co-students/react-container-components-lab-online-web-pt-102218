import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import secrets from '../secrets.json'

const NYT_API_KEY = secrets.apiKeys.NYTimes;
const BASE_SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'

export default class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: "",
    }
  }

  url = () => `${BASE_SEARCH_URL}?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`

  handleSubmit = e => {
    e.preventDefault()
    fetch(this.url())
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          ...this.state,
          reviews: json.results || [],
        })
      })
  }

  handleFieldChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="searchTerm" onChange={this.handleFieldChange} value={this.state.searchTerm} />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
