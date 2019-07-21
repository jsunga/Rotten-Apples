import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import axios from 'axios'
import '../styling/navbar.scss'

export default class Navbar extends Component {

    state = {
        input: '',
        results: []
    }

    search = async e => {
        e.preventDefault()
        let results = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1&include_adult=false&query=${this.state.input}`)
        console.log(results.data.results)

    }

    render() {
        return (
            <>
                <div className='navbar'>
                    <div className='left-container'>
                        <NavLink  to='/movies' className='logo'><main>Rotten Apples</main></NavLink>
                        <form onSubmit={this.search}>
                            <input placeholder='Search movie..' value={this.state.input} onChange={e => this.setState({input: e.target.value})}/>
                            <button>Search</button>
                        </form>
                    </div>
                    <div className='right-container'>
                        <ul>
                            <NavLink  to='/movies' activeStyle={{textDecoration: 'underline'}} className='nav-link'><li>Movies</li></NavLink>
                            <NavLink  to='/tv' activeStyle={{textDecoration: 'underline'}} className='nav-link'><li>TV Shows</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div className='social-media'>
                    <div className='left-container'>
                        <img src={fb} height='17px' width='17px' alt='pic' />
                        <img src={ig} height='17px' width='17px' alt='pic' />
                        <img src={twitter} height='17px' width='17px' alt='pic' className='special' />
                    </div>
                    <div className='right-container'>
                        Powered By TMDb
                    </div>
                </div>
            </>
        )
    }

}
