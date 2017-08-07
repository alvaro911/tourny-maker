import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions'

class TeamInTournament extends Component{
  componentWillMount(){
    const paramsId = this.props.match.params.id
    this.props.getTournamentById(paramsId)
    this.props.getMatchesAction(paramsId)
  }

  goBack(){
    window.history.back()
  }

  goToMatch(id){
    this.props.history.push(`/match/${id}`)
  }

  render(){
    if(!this.props.tourny){
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }

    const teams = this.props.tourny.teams.map(team => (
      <div key={team._id}>
        <h3>{team.teamName} {team.points} {team.totalGoals}</h3>
      </div>
    ))

    const results = this.props.matchArr.map(result => (
      <div key={result._id}>
        <p onClick={this.goToMatch.bind(this, result._id)}>{result.teamA.teamName} {result.goalsA} - {result.goalsB} {result.teamB.teamName}</p>
      </div>
    ))

    const matches = this.props.matchArr.map(match => (
      <div key={match._id}>
        <h3>Week {match.round}</h3>
        <p>{match.teamA.teamName} vs {match.teamB.teamName}</p>
      </div>
    )).sort((a, b) => a.round > b.round)

    return(
      <div>
        <div className="tournament">
          <h2>{this.props.tourny.tournamentName}</h2>
          <div className="tournament-nav">
            <p>{this.props.tourny.startDate}</p>
            <p>{this.props.tourny.address}, {this.props.tourny.city} - {this.props.tourny.state}</p>
            <button onClick={() => this.goBack()}>Back</button>
          </div>
        </div>
        <div className="teams-list">
          <h2>Leaderboard</h2>
          {teams}
        </div>
        <div>
          <h2>Upcoming matches</h2>
          {matches}
        </div>
        <div>
          <h2>Match results</h2>
          {results}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({tournament, match}, ownProps) => (
  {
    tourny: tournament.tournaments.find(f => f._id === ownProps.match.params.id),
    matchArr: match.matches,
  }
)

export default connect(mapStateToProps, actions)(TeamInTournament)
