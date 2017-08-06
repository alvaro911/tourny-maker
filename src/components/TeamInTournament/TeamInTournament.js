import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions'

class TeamInTournament extends Component{
  componentWillMount(){
    this.props.getTournamentById(this.props.match.params.id)
    this.props.getMatchesAction(this.props.match.params.id)
  }

  goBack(){
    window.history.back()
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
        <h3>{team.teamName}</h3>
      </div>
    ))

    const matches = this.props.tourny.matches.map(match => (
      <div>
        hello
      </div>
    ))

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
          <h2>Teams</h2>
          {teams}
        </div>
        <div>
          <h2>Matches</h2>
          {matches}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({tournament, match}) => {
  console.log(match);
  return {
  tourny: tournament.tournaments[0]
  }
}

export default connect(mapStateToProps, actions)(TeamInTournament)
