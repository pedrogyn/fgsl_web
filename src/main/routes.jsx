import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory, browserHistory } from 'react-router'

import main from '../theme/main'

import Eventos from '../pages/Eventos'

export default class Routes extends Component {
    render() {
        const { router, params, location, routes } = this.props
        return (
            <Router history={hashHistory}>
                <Route path='/' component={main}>
                    <IndexRoute component={Eventos} />
                    <Route path='/eventos' component={Eventos} />
                </Route>
                <Redirect from='*' to='/' />
            </Router>
        )
    }
}