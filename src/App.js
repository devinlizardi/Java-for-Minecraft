import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from "react-router-dom";

import Intro from './components/intro.jsx';
import './components/header.css';

import Setup from './components/setup.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="header">
                        <Link to="/" id="header-title"><h1>lizard learning</h1></Link>
                        <Link to="/" className="header-link"> Intro </Link> |
                        <Link to="/setup" className="header-link"> Getting Started </Link> |
                        <Link to="/" className="header-link"> Tutorial </Link> | 
                        <Link to="/" className="header-link"> Examples </Link>
                    </div>
                    <br />
                    <hr className="header-line" />

                    <Switch>
                        <Route exact path="/">
                            <Intro />
                        </Route>
                        <Route path="/setup">
                            <Setup />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;