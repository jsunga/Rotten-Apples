import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Details from './components/Details'

const Routes = () => {

    return (
        <HashRouter basename='/'>
            <Navbar />
            <Route exact path='/' render={() => <Redirect to='/movies' />} />

            <Route exact path='/movies' component={() => <Movies type='now_playing' />} />
            <Route exact path='/movies/coming_soon' component={() => <Movies type='upcoming' />} />
            <Route exact path='/movies/popular' component={() => <Movies type='popular' />} />
            <Route exact path='/movies/top_rated' component={() => <Movies type='top_rated' />} />

            <Route exact path='/tv_shows' component={() => <Shows type='on_the_air' />} />
            <Route exact path='/tv_shows/airing_today' component={() => <Shows type='airing_today' />} />
            <Route exact path='/tv_shows/popular' component={() => <Shows type='popular' />} />
            <Route exact path='/tv_shows/top_rated' component={() => <Shows type='top_rated' />} />

            <Route path='/details/movie/:handle' component={Details} />
            
            <style>{'body { background-color: #e6ecf0; }'}</style>
        </HashRouter>
    )

}

export default Routes