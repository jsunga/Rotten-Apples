import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styling/sidebar.scss'

const MovieNavbar = () => {

    return (
        <div className='sidebar'>
            <div>
                <h3>Movies</h3>
                <ul>
                    <NavLink to='/movies' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>Now Playing</li></NavLink>
                    <NavLink to='/movies/coming_soon' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>Coming Soon</li></NavLink>
                    <NavLink to='/movies/popular' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>Popular</li></NavLink>
                    <NavLink to='/movies/top_rated' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>Top Rated</li></NavLink>
                </ul>
            </div>
        </div>
    )

}

export default MovieNavbar