import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import './Navbar.scss'

export default class Navbar extends Component {

    render() {
        return (
            <>
                <div className='navbar'>
                    <div className='left-container'>
                        <main>Rotten Apples</main>
                        <form>
                            <input placeholder='Search movie..' />
                            <button>Search</button>
                        </form>
                    </div>
                    <div className='right-container'>
                        <ul>
                            <NavLink  to='/movies' activeStyle={{textDecoration: 'underline'}} className='nav-link'><li>Movies</li></NavLink>
                            <NavLink  to='/tv_shows' exact activeStyle={{textDecoration: 'underline'}} className='nav-link'><li>TV Shows</li></NavLink>
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
