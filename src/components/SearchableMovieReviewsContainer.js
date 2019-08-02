import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const nyTimesKey = "VjCJEUm1BWGIhqnnWGEAGuAOKKdkMx9Y"
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${nyTimesKey}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviews extends Component {
  constructor() {
    super() 
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value 
    })
  }

  handleSubmitEvent = event => {
    event.preventDefault()
    
    fetch(URL + this.state.searchTerm)
      .then(response => response.json())
      .then(res => this.setState({
        reviews: res.results 
      }))
  }
  render() {
    return(
      <div className="searchable-movie-reviews">
         <form onSubmit={ event => this.handleSubmitEvent(event)}>
        <input onChange={ event => this.handleSearchChange(event)} type="text" name="searchTerm" id="searchTerm" value={this.state.searchTerm} />
      </form>
      {
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />

      </div>
    )
  }
}
export default SearchableMovieReviews
