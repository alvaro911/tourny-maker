import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './Header';
import Home from './Home'
import CreateTournament from './CreateTournament'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/create-tournament" component={CreateTournament}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
