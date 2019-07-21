import React, { Component } from 'react'
import MovieNavbar from './MovieNavbar'
import Results from './Results'
import axios from 'axios'
import '../styling/style.scss'

export default class Home extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        if (localStorage.length === 0) this.fetchGenres()
        this.fetchMovies()
    }

    fetchMovies = async () => {
        let movies = await axios.get(`https://api.themoviedb.org/3/movie/${this.props.type}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`)
        this.setState({movies: movies.data.results})
    }

    fetchGenres = async () => {
        let result = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US')
        for (let genre of result.data.genres) {
            localStorage.setItem(`${genre.id}`, `${genre.name}`)
        }
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