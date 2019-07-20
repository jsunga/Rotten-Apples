import React, { Component } from 'react'
import MoviesNavbar from './MoviesNavbar'
import Movies from './Movies'
import axios from 'axios'
import './Home.scss'

export default class Home extends Component {

    state = {
        movies: [],
        isLoading: false
    }

    componentDidMount() {
        if (localStorage.length === 0) this.fetchGenres()
        this.fetchMovies()
    }

    fetchMovies = async () => {
        this.setState({isLoading: true})
        let movies = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
        this.setState({
            isLoading: false,
            movies: movies.data.results
        })
        console.log(movies.data.results)
    }

    fetchGenres = async () => {
        let result = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US')
        for (let genre of result.data.genres) {
            localStorage.setItem(`${genre.id}`, `${genre.name}`)
        }
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