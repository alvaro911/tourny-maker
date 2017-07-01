import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import CreateTournament from '../CreateTournament/CreateTournament';
import SearchTournament from '../SearchTournament/SearchTournament';
import RegisterTeam from '../RegisterTeam/RegisterTeam';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/create-tournament" component={CreateTournament}/>
            <Route exact path="/search-tournament" component={SearchTournament}/>
            <Route exact path="/register-team" component={RegisterTeam}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
