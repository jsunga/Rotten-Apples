import React, { Component } from 'react'
import TVNavbar from './TVNavbar'
import Movies from './Movies'
import axios from 'axios'
import './Home.scss'

export default class Home extends Component {

    state = {
        movies: []
    }

    componentDidMount() {
        if (localStorage.length === 0) this.fetchGenres()
        this.fetchMovies()
    }

    fetchMovies = async () => {
        let movies = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1')
        this.setState({movies: movies.data.results})
    }

    fetchGenres = async () => {
        let result = await axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US')
        for (let genre of result.data.genres) {
            localStorage.setItem(`${genre.id}`, `${genre.name}`)
        }
    }

    render() {
        return (
            <div className='home'>
                <TVNavbar />
                <div className='right-container'>
                    <Movies movies={this.state.movies} />
                </div>  
            </div>
        )
    }

}