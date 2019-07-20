import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ComingSoon from './components/ComingSoon'
import Popular from './components/Popular'
import TopRated from './components/TopRated'

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
            <style>{'body { background-color: #e6ecf0; }'}</style>
        </HashRouter>
    )

}

export default Routes