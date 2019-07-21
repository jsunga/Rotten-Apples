import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styling/sidebar.scss'

const ShowNavbar = () => {

    return (
        <div className='sidebar'>
            <div>
                <h3>TV Shows</h3>
                <ul>
                    <NavLink to='/tv' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>On The Air</li></NavLink>
                    <NavLink to='/tv/airing_today' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>Airing Today</li></NavLink>
                    <NavLink to='/tv/popular' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>Popular</li></NavLink>
                    <NavLink to='/tv/top_rated' exact activeStyle={{color: '#FFE400', fontWeight: 'bold'}} className='nav-link'><li>Top Rated</li></NavLink>
                </ul>
            </div>
        </div>
    )

}

export default ShowNavbar