import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import './user.css';
import create from '../../img/create-btn.png'
import stats from '../../img/stats-btn.png'
import deleteBtn from '../../img/delete-btn.png'

class UserTournaments extends Component {
  componentWillMount() {
    this.props.getTournamentsByUserId(
      localStorage.getItem('_id'),
    );
  }

  deleteTourny(id) {
    this.props.deleteTournamentAction(id);
  }

  goToTournament(id) {
    this.props.history.push(`/tournament-id/${id}`);
  }

  create(id) {
    this.props.createMatchesActions(id);
    this.props.history.push(`/tournament-id/${id}`);
  }

  goBack(){
    this.props.history.push('/');
  }

  render() {
    if (this.props.userTournyArr.length === 0) {
      return (
        <h1 className="Source-Sans no-teams">
          You don't have tournaments yet
        </h1>
      );
    }
    const tournaments = this.props.userTournyArr.map(
      (item, i) =>
        <div className="tourny" key={item._id}>
          <div className="tourny-number">
            <h3>
              {i + 1}
            </h3>
          </div>
          <div className="tourny-name">
            <h3>
              {item.tournamentName}
            </h3>
            <h3> {item.teams.length}/{item.numberOfTeams}
            </h3>
            <h3>
              {new Date(item.startDate).toLocaleString()}
            </h3>
          </div>
          <div className="tourny-actions">
            {item.teams.length === item.numberOfTeams
              ? <div className="action-btn-holder">
                  <button
                    onClick={this.create.bind(this, item._id)}
                  >
                    <img src={create} />
                  </button>
                  <h6>CREATE</h6>
                </div>
              : null}
            {item.teams.length !== item.numberOfTeams
              ? null//  <button>Update</button>
              : null}
            <div className="action-btn-holder">
              <button
                onClick={this.goToTournament.bind(
                  this,
                  item._id,
                )}
              >
                <img src={stats} />
              </button>
              <h6>STATS</h6>
            </div>
            <div className="action-btn-holder">
              <button
                onClick={this.deleteTourny.bind(
                  this,
                  item._id,
                )}
              >
                <img src={deleteBtn} />
              </button>
              <h6>DELETE</h6>
            </div>
          </div>
        </div>,
    );

    if (!this.props.userTournyArr) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="my-tournaments">
        <h1 className="Source-Sans">My Tournaments</h1>
        <p>
          Here's list of all of the tournaments you created so far, you can see the name of the tournament, the teams that are already registered, when do they start and an actions button panel. <br />

        Look at the buttons carefuly the <b>CREATE</b> button, once all of the teams you estipulated are registered the <b>CREATE</b> button will appear, once you click on it this will trigger for the tournament to start, this means that the calendar will set up. <b>NOTE</b> that you only have to click this button once. <br />

      The <b>STATS</b> button allows you to look and edit each tournament statistics, you can update results and take a look to the leaderboard. <br />

    The <b>DELETE</b> button allows you to eliminate the tournament, try not to delete a tournament that is currently being played.
        </p>
        <div className="tourny">
          <div className="tourny-number">
            <h4>No</h4>
          </div>
          <div className="tourny-name">
            <h4>League name</h4>
            <h4>Teams registered</h4>
            <h4>Tournament starts</h4>
          </div>
          <div className="tourny-actions">
            <h4>Actions</h4>
          </div>
        </div>
        {tournaments}
        <button onClick={() => this.goBack()}>Back</button>
      </div>
    );
  }
}

UserTournaments.defaultProps = {
  userTournyArr: [],
};

const mapStateToProps = ({ tournament }) => ({
  userTournyArr: tournament.userTournaments,
});

export default withRouter(
  connect(mapStateToProps, actions)(UserTournaments),
);
