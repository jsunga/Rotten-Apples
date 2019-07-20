import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ComingSoon from './components/ComingSoon'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import TVShows from './components/TVShows'
import AiringToday from './components/AiringToday'
import PopularTV from './components/PopularTV'
import TopRatedTV from './components/TopRatedTV'

const Routes = () => {

    return (
        <HashRouter basename='/'>
            <Navbar />
            <Route exact path='/' render={() => (
                <Redirect to='/movies' />
            )} />
            <Route exact path='/movies' component={Home} />
            <Route exact path='/movies/coming_soon' component={ComingSoon} />
            <Route exact path='/movies/popular' component={Popular} />
            <Route exact path='/movies/top_rated' component={TopRated} />

            <Route exact path='/tv_shows' component={TVShows} />
            <Route exact path='/tv_shows/airing_today' component={AiringToday} />
            <Route exact path='/tv_shows/popular' component={PopularTV} />
            <Route exact path='/tv_shows/top_rated' component={TopRatedTV} />
            <style>{'body { background-color: #e6ecf0; }'}</style>
        </HashRouter>
    )

}

export default Routes