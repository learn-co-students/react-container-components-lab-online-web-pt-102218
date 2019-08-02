import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '4mLuN9TUP4Kw1YoPubNuOGOzYze6iOIw';
const QUERY_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here


class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state ={
      reviews: [],
      searchTerm: ''
    }

  }

  handleSearch = e => {
    e.preventDefault()
    fetch(QUERY_URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(reviews => this.setState({
      reviews: reviews.results
    }))
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      < div className = "searchable-movie-reviews" >
        <form onSubmit={this.handleSearch}>
          <h4> Search Movie Reviews</h4>
            <input type="text" id="search-term" onChange={this.handleChange} value={this.searchTerm}></input>
            <input type="submit" value="Search"></input>
        </form>
        {this.state.reviews.length > 0 && <h3>Movie Review By Search :</h3>}
        <MovieReviews reviews={this.state.reviews}/>
        
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
