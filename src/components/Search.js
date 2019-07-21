import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import MovieNavbar from './MovieNavbar'
import Results from './Results'
import axios from 'axios'
import '../styling/style.scss'

class Search extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        const { search } = this.props.location
        const query = search.split('=')[1]
        this.search(query)
    }

    search = async query => {
        let results = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1&include_adult=false&query=${query}`)
        this.setState({movies: results.data.results})
    }

    render() {
        return (
            <div className='main'>
                <MovieNavbar />
                <div className='right-container'><Results movies={this.state.movies} type='/details/movie/' /></div>  
            </div>
        )
    }

}

export default withRouter(Search)