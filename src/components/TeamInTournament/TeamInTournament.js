import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actions from '../../actions';
import './tournament.css'

class TeamInTournament extends Component {
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.getTournamentById(paramsId);
    this.props.getMatchesAction(paramsId);
  }

  goBack() {
    this.props.history.push('/me/tournaments');
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

    const teams = this.props.tourny.teams.map(team =>
      (<div key={team._id} className="team-stats">
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
              {team.points}
            </h3>
          </div>
      </div>),
    );

    const results = this.props.matchArr.map(result =>
      (<div key={result._id}>
        <p onClick={this.goToMatch.bind(this, result._id)}>
          {result.teamA.teamName} {result.goalsA} -{' '}
          {result.goalsB} {result.teamB.teamName}
        </p>
        {(result.fullTime === true) ? <p>final</p> : null}
      </div>),
    );

    const matches = this.props.matchArr
      .map(match =>
        (<div key={match._id} className="week">
          <h3>
            Week {match.round}
          </h3>
          <p>
            {match.teamA.teamName} vs {match.teamB.teamName}
          </p>
        </div>),
      )
      .sort((a, b) => a.round > b.round);

    const tdate = this.props.tourny.startDate
    const date = (new Date(tdate)).toLocaleString()
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
          <div className="teams-list stats">
            <h2>Leaderboard</h2>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  { tournament, match },
  ownProps,
) => ({
  tourny: tournament.tournaments.find(
    f => f._id === ownProps.match.params.id,
  ),
  matchArr: match.matches,
});

export default withRouter(connect(mapStateToProps, actions)(
  TeamInTournament,
));
