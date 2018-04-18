import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from '../../layouts/App'
import Home from '../../views/Home'
import Movies from '../../views/Movies'
import Movie from '../../views/Movie'
import NotFound from '../../views/NotFound'

import Show from '../../views/Show'
import Shows from '../../views/Shows'

const Router = ({ history }) => (
    <ConnectedRouter history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shows/:id" component={Show} />
                <Route path="/shows" component={Shows} />
                <Route path="/movies/:id" component={Movie} />
                <Route path="/movies" component={Movies} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </ConnectedRouter>
)

export default Router