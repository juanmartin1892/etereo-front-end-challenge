import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListMobiles from './components/listMobiles'
import DetailsMobile from './components/detailsMobile'
import Loader from './components/loader'


import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        const pathname = window.location.pathname
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 ml-0">
                <a className="navbar-brand" href="/">Buscador de moviles</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>
              <Loader/>
              <Switch>
                  <Route exact path="/" component={ListMobiles} />
                  <Route exact path="/mobile/:id" component={DetailsMobile} />
              </Switch>
            </div>
        );
    }
}

export default App;
