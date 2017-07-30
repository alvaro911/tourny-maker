import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import CreateTournament from '../CreateTournament/CreateTournament';
import SearchTournament from '../SearchTournament/SearchTournament';
import RegisterTeam from '../RegisterTeam/RegisterTeam';
import UserProfile from '../UserProfile/UserProfile';
import UserUpdate from '../UserProfile/UserUpdate'
import { checkIfAuth } from '../../actions/userActions';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(checkIfAuth());
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/sign-up"
              component={SignUp}
            />
            <Route
              exact
              path="/create-tournament"
              component={CreateTournament}
            />
            <Route
              exact
              path="/search-tournament"
              component={SearchTournament}
            />
            <Route
              exact
              path="/register-team/:id"
              component={RegisterTeam}
            />
            <Route
              exact
              path="/me"
              component={UserProfile}
            />
          <Route exact path="/me/update" component={UserUpdate}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
