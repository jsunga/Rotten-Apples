import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import '../styling/navbar.scss'

class Navbar extends Component {

    state = {
        input: '',
        results: []
    }

    search =  e => {
        e.preventDefault()
        this.props.history.push(`/search?queue=${this.state.input}`)
    }

    render() {
        return (
            <>
                <div className='navbar'>
                    <div className='left-container'>
                        <NavLink  to='/movies' className='logo'><main>Rotten Apples</main></NavLink>
                        <form onSubmit={this.search}>
                            <input placeholder='Search movie..' value={this.state.input} onChange={e => this.setState({input: e.target.value})} onClick={() => this.setState({input: ''})} />
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

export default withRouter(Navbar)