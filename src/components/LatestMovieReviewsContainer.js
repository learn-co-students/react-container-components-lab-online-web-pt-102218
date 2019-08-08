import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import secrets from '../secrets.json'

const NYT_API_KEY = secrets.apiKeys.NYTimes;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
  + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentWillMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          ...this.state,
          reviews: json.results,
        })
      })
  }

  render() {
    return <MovieReviews className="latest-movie-reviews" reviews={this.state.reviews} />
  }
}
