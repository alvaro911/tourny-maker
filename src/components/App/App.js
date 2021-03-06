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
import UserUpdate from '../UserProfile/UserUpdate';
import UserTournaments from '../UserProfile/UserTournaments';
import TeamInTournament from '../TeamInTournament/TeamInTournament';
import MatchResult from '../TeamInTournament/MatchResult';
import UserTeam from '../UserProfile/UserTeam';
import { checkIfAuth } from '../../actions/userActions';
// import PrivateRoute from '../PrivateRoute';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(checkIfAuth());
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/tournament-id/:id"
            component={TeamInTournament}
          />
          <Route
            exact
            path="/register-team/:id"
            component={RegisterTeam}
          />
          <Route
            exact
            path="/me/teams"
            component={UserTeam}
          />
          <Route
            exact
            path="/create-tournament"
            component={CreateTournament}
          />
          <main>
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/sign-up"
              component={SignUp}
            />
            <Route
              exact
              path="/search-tournament"
              component={SearchTournament}
            />
            <Route
              exact
              path="/me"
              component={UserProfile}
            />
            <Route
              exact
              path="/me/update"
              component={UserUpdate}
            />
            <Route
              exact
              path="/me/tournaments"
              component={UserTournaments}
            />
            <Route
              exact
              path="/match/:id"
              component={MatchResult}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
