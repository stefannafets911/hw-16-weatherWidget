import { Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './components/main';
import history from './utils/browserHistory';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact={true} render={props => <Main {...props} /> } />
                </Switch>
            </Router>
        );
    }
}

export default App;