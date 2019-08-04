import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component{

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
        this.updateSearchTerm = this.updateSearchTerm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateSearchTerm(word){
        this.setState({
            searchTerm: word
        })
    }

    handleSubmit(event){
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}` )
        .then(resp => resp.json())
        .then(reviewsData => {
            this.setState({
                reviews: reviewsData.results
            })
        })
    }


    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search Term
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.updateSearchTerm}></input>
                    </label>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}