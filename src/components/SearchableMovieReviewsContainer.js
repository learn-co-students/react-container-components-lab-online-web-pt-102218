import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import secrets from '../secrets.json'

const NYT_API_KEY = secrets.apiKeys.NYTimes;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
