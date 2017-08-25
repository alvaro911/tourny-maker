import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import './tournament.css';

class TeamInTournament extends Component {
  async componentDidMount() {
    const paramsId = this.props.match.params.id;
    await this.props.getTournamentById(paramsId);
  }

  goBack() {
    if (localStorage.getItem('role') === 'CREATOR') {
      this.props.history.goBack('/me/tournaments');
    }
    this.props.history.goBack('/me/teams');
  }

  goToMatch(id) {
    this.props.history.push(`/match/${id}`);
  }

  render() {
    if (!this.props.tourny) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    const teams = this.props.tourny.pointsArr.map(
      (team, i) =>
        <div key={team.teamId} className="team-stats">
          <div className="team-pos">
            <h3>
              {i + 1}
            </h3>
          </div>
          <div className="team-name">
            <h3>
              {team.teamName}
            </h3>
          </div>
          <div className="team-goals">
            <h3>
              {team.totalGoals}
            </h3>
          </div>
          <div className="team-points">
            <h3>
              {team.totalPoints}
            </h3>
          </div>
        </div>,
    );

    const results = this.props.tourny.matches.map(result =>
      <div key={result._id} className="match">
        <p>
          {result.teamA.teamName} {result.goalsA} -{' '}
          {result.goalsB} {result.teamB.teamName}
        </p>
        {result.fullTime === true ? <p>Final</p> : null}
        {result.fullTime === true &&
        localStorage.getItem('role') === 'CREATOR'
          ? <button
              onClick={this.goToMatch.bind(
                this,
                result._id,
              )}
            >
              Update
            </button>
          : null}
      </div>,
    );

    const matches = this.props.tourny.matches.map(
      match =>
        match.fullTime !== true
          ? <div
              key={match._id}
              className="week"
              onClick={
                localStorage.getItem('role') ===
                  'CREATOR' &&
                this.goToMatch.bind(this, match._id)
              }
            >
              <h3>
                Week {match.round}
              </h3>
              <p>
                {match.teamA.teamName} vs{' '}
                {match.teamB.teamName}
              </p>
            </div>
          : null,
    );

    const tdate = this.props.tourny.startDate;
    const date = new Date(tdate).toLocaleString();
    return (
      <div>
        <div className="tournament">
          <h2>
            {this.props.tourny.tournamentName}
          </h2>
          <div className="tournament-nav">
            <p>
              {date}
            </p>
            <p>
              {this.props.tourny.address},{' '}
              {this.props.tourny.city} -{' '}
              {this.props.tourny.state}
            </p>
            <button onClick={() => this.goBack()}>
              Back
            </button>
          </div>
        </div>
        <div className="tournament-stats">
          <main>
            <div className="teams-list stats">
              <h2>Leaderboard</h2>
              <div className="team-stats banner">
                <div className="team-pos">POS</div>
                <div className="team-name">TEAMS</div>
                <div className="team-goals">GOALS</div>
                <div className="team-points">POINTS</div>
              </div>
              {teams}
            </div>
            <div className="stats">
              <h2>Upcoming matches</h2>
              {matches}
            </div>
            <div className="stats">
              <h2>Match results</h2>
              {results}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tournament }, ownProps) => ({
  tourny: tournament.tournaments.find(
    f => f._id === ownProps.match.params.id,
  ),
});

export default withRouter(
  connect(mapStateToProps, actions)(TeamInTournament),
);
