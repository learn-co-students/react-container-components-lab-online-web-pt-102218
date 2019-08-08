import React from 'react'; import ReactDOM from 'react-dom'; 
import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(

  <div className="app">
    <div className="col" style={{width: "30%", margin: "0, auto", display: "inline-block", float: "left"}}> 
      <LatestMovieReviewsContainer />
    </div>
    <div className="col" style={{width: "30%", margin: "0, auto", display: "inline-block"}}> 
      <SearchableMovieReviewsContainer />
    </div>
  </div>,
  document.getElementById('root')
);