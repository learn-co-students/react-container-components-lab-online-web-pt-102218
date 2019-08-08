import React from 'react';
import ReactDOM from 'react-dom';

// import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
// import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import MovieReviews from './components/MovieReviews';
import exampleApiResponse from './exampleApiResponse.json'

ReactDOM.render(
  <div className="app">
    {/* <SearchableMovieReviewsContainer />
    // <LatestMovieReviewsContainer /> */}
    <MovieReviews reviews={exampleApiResponse.results} />
  </div>,
  document.getElementById('root')
);