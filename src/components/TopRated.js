import React, { Component } from 'react'
import MoviesNavbar from './MoviesNavbar'
import axios from 'axios'
import './Home.scss'

export default class TopRated extends Component {

    componentDidMount() {
        this.fetchMovies()
    }

    fetchMovies = async () => {
        let movies = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`)
        console.log(movies.data.results)
    }

    render() {
        return (
            <div className='home'>
                <MoviesNavbar />
                <div className='right-container'>
                    Top Rated
                </div>  
            </div>
        )
    }

}
