import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from '../components/about/About';
import { Ciudad } from '../components/ciudad/Ciudad';
import { Nav } from '../components/ui/Nav';
import Cards from '../components/weather/Cards';

export const AppRouter = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/ciudad/:id'>
                    <Ciudad />
                </Route>
                <Route exact path='/'>
                    <Cards />
                </Route>

            </Switch>
        </Router>
    )
}



