import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import './user.css';

class UserTournaments extends Component {
  componentWillMount() {
    this.props.getTournamentsByUserId(this.props.id);
  }

  deleteTourny(id) {
    this.props.deleteTournamentAction(id);
  }

  goToTournament(id) {
    this.props.history.push(`/tournament-id/${id}`);
  }

  create(id) {
    this.props.createMatchesActions(id);
  }

  render() {
    const tournaments = this.props.userTournyArr.map(
      (item, i) =>
        <div className="tourny" key={item._id} onClick={this.goToTournament.bind(
          this,
          item._id,
        )}>
          <div className="tourny-number">
            <h2>
              {i + 1}
            </h2>
          </div>
          <div className="tourny-name">
            <h2>
              {item.tournamentName}
            </h2>
            <h3>
              Teams registered: {item.teams.length}/{item.numberOfTeams}
            </h3>
            <h4>Starts: {(new Date(item.startDate)).toLocaleString()}</h4>
          </div>
          <div className="tourny-actions">
            {(item.teams.length === item.numberOfTeams) ? <button
              onClick={this.create.bind(this, item._id)}
            >
              Create Matches
            </button> : null}
            {(item.teams.length !== item.numberOfTeams) ? <button>update</button> : null}
            <button
              onClick={this.deleteTourny.bind(
                this,
                item._id,
              )}
            >
              delete
            </button>
          </div>
        </div>,
    );

    if (!this.props.userTournyArr) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1 className="Source-Sans">My Tournaments</h1>
        {tournaments}
      </div>
    );
  }
}

UserTournaments.defaultProps = {
  userTournyArr: [],
};

const mapStateToProps = ({ user, tournament }) => ({
  userTournyArr: tournament.userTournaments,
  id: user._id,
});

export default withRouter(
  connect(mapStateToProps, actions)(UserTournaments),
);
