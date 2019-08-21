import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JDVlLCcAbGBqGMGxK0nGEQS2QSs5fdcs';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=dogs&'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            reviews : [],
            searchTerm : ''
        }
    }

    handleChange(event){
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.searchTerm + '&'+ `api-key=${NYT_API_KEY}`)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    reviews: myJson.results.slice(0, 3)
                })
            });
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={(event) => this.handleChange(event)}></input>
                    <button type="submit">submit</button>
                </form> 
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer