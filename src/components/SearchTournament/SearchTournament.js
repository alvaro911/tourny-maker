import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Spinner from 'react-spinkit';

import * as actions from '../../actions';
import './SearchTournament.css';

class SearchTournament extends Component {
  componentDidMount() {
    this.props.getTournamentsActions();
  }

  toRegTeam(id) {
    this.props.history.push(`/register-team/${id}`);
  }

  render() {
    const tournamentArr = this.props.tData.map(
      item =>
        item.teams.length !== item.numberOfTeams
          ? <div key={item._id} className="tournament-card">
              <h3>
                {item.tournamentName}
              </h3>
              <p>Teams in the league</p>
              <p>
                {item.teams.length}/{item.numberOfTeams}
              </p>
              <p>
                City: {item.city}
              </p>
              <h5>
                Start Date: {item.startDate}
              </h5>
              <h5>
                Created by: {item.user.userName}
              </h5>
              <button
                className="team-reg-btn"
                onClick={this.toRegTeam.bind(
                  this,
                  item._id,
                )}
              >
                Register Team
              </button>
            </div>
          : null,
    );
    if (!this.props.tData) {
      return (
        <div>
          <h2>Loading...</h2>
          <Spinner
            name="ball-pulse-rise"
            color="steelblue"
          />
        </div>
      );
    }
    return (
      <div className="search-tournament">
        <h2 className="Source-Sans">Search for a league</h2>
        <p>
          Ready to show the world what you and your friends
          are made of? Pick the tournament you would like to
          participate in. Pay attenttion when we the
          tournament starts.
        </p>
        <div className="tournament-list">
          {tournamentArr}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tournament }) => ({
  tData: tournament.tournaments,
});

export default withRouter(
  connect(mapStateToProps, actions)(SearchTournament),
);
