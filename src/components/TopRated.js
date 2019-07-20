import React, { Component } from 'react'
import MoviesNavbar from './MoviesNavbar'
import Movies from './Movies'
import axios from 'axios'
import './Home.scss'

export default class TopRated extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        if (localStorage.length === 0) this.fetchGenres()
        this.fetchMovies()
    }

    fetchMovies = async () => {
        let movies = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
        this.setState({movies: movies.data.results})
    }

    render() {
        return (
            <div className='home'>
                <MoviesNavbar />
                <div className='right-container'>
                    <Movies movies={this.state.movies} />
                </div>  
            </div>
        )
    }

}
