import React, { Component } from 'react'
import Cast from './Cast'
import Reviews from './Reviews'
import axios from 'axios'
import '../styling/details.scss'

const frontPath = 'https://image.tmdb.org/t/p/original'

export default class Details extends Component {

    state = {
        details: [],
        cast: [],
        reviews: [],
        genre1: '',
        genre2: '',
        url: ''
    }

    componentDidMount() {
        const { handle } = this.props.match.params
        this.fetchDetails(handle)
    }

    fetchDetails = async handle => {
        let details = await axios.get(`https://api.themoviedb.org/3/movie/${handle}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US`)
        if (details.data.genres.length === 1) this.setState({details: details.data, genre1: details.data.genres[0].name})
        else {
            this.setState({
                details: details.data,
                genre1: details.data.genres[0].name,
                genre2: details.data.genres[1].name
            })
        }

        let trailers = await axios.get(`https://api.themoviedb.org/3/movie/${handle}/videos?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US`)
        this.setState({url: trailers.data.results[0].key})

        let cast = await axios.get(`https://api.themoviedb.org/3/movie/${handle}/credits?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US`)
        if (cast.data.cast.length < 12) this.setState({cast: cast.data.cast.slice(0, cast.data.cast.length)})
        else this.setState({cast: cast.data.cast.slice(0, 12)})

        let reviews = await axios.get(`https://api.themoviedb.org/3/movie/${handle}/reviews?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1`)
        this.setState({reviews: reviews.data.results})
    }

    render() {
        const { details, genre1, genre2 } = this.state
        return (
            <div className='details'>
                <div className='backdrop'>
                    <img src={frontPath + details.backdrop_path} alt='backdrop' />
                    <div className='details'>
                        <div className='left-container'>
                            <img src={frontPath + details.poster_path} alt='poster' />
                        </div>
                        <div className='right-container'>
                            <h1>{details.title}</h1>
                            <section>{details.vote_average} / 10</section>
                            <div>{genre1} {this.state.genre2 ? '|' : null} {genre2}</div>
                            <main>{`${details.status}`.toUpperCase()} | {`${details.original_language}`.toUpperCase()}</main>
                        </div>
                    </div>
                </div>
                <div className='summary'>
                    <div className='left-container'>
                        <h1>SUMMARY</h1>
                        <p>{details.overview}</p>
                    </div>
                    <div className='right-container'>
                        <iframe width="500" height="300"
                            src={`https://www.youtube.com/embed/${this.state.url}`}
                            title="trailer" 
                        />
                    </div>
                </div>
                <div className='header'>
                    <h1>CAST</h1>
                    <Cast cast={this.state.cast} />
                </div>
                <div className='header'>
                    <h1>REVIEWS</h1>
                    <Reviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }

}
