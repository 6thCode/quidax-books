import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './services/history'
import Layout from './services/Layout'
import Main from './assets/pages/Main'
import Single from './assets/pages/Single'

const MainApp = ({component: Component, ...rest}) => (
    <Route history={history}
        {...rest}
        render={props => (
            <Layout {...props}>
                <Component {...rest} />
            </Layout>
        )}
    />  
);


export default class Routes extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <MainApp
                    exact
                    path="/" 
                    component={Main} />
                    <MainApp
                    path="/single" 
                    component={Single} />
                </Switch>
            </Router>
        );
    }
};