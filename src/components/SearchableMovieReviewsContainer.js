import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: []
    }

    fetchData = () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => 
            
            this.setState({
            reviews: data,
            searchTerm: data.results
            })
        )
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form  onSubmit={this.fetchData}></form>
                <MovieReviews reviews={this.state.reviews}/>
           </div>
        )
    }
}
