import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Details from './components/Details'
import Search from './components/Search'
import ErrorComponent from './components/ErrorComponent'

const Routes = () => {

    return (
        <HashRouter basename='/'>
            <Navbar />
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/movies' />} />

                <Route exact path='/movies' component={() => <Movies type='now_playing' />} />
                <Route exact path='/movies/coming_soon' component={() => <Movies type='upcoming' />} />
                <Route exact path='/movies/popular' component={() => <Movies type='popular' />} />
                <Route exact path='/movies/top_rated' component={() => <Movies type='top_rated' />} />

                <Route exact path='/tv' component={() => <Shows type='on_the_air' />} />
                <Route exact path='/tv/airing_today' component={() => <Shows type='airing_today' />} />
                <Route exact path='/tv/popular' component={() => <Shows type='popular' />} />
                <Route exact path='/tv/top_rated' component={() => <Shows type='top_rated' />} />

                <Route path='/details/:type/:id' component={Details} />


                <Route exact path="/search" render={(props) => (
                    <Search key={props.location.search} />)} 
                />

                <Route component={ErrorComponent} />
                
                <style>{'body { background-color: #e6ecf0; }'}</style>
            </Switch>
        </HashRouter>
    )

}

export default Routes