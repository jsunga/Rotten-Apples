import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

const Routes = () => {

    return (
        <HashRouter basename='/'>
            <Navbar />
            <Route exact path='/' component={Home} />
        </HashRouter>
    )

}

export default Routes