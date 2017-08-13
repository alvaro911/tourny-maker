import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import * as actions from '../../actions'

class UserTeam extends Component{
  componentDidMount(){
    this.props.getTeamByUserId(localStorage.getItem('_id'))
  }

  toTournament(id){
    this.props.history.push(`/tournament-id/${id}`)
  }

  render(){
    if(!this.props.team){
      return(
        <h1>Loading...</h1>
      )
    }
    const teamsInfo = this.props.team.map((teamInfo, i) => (
      <div key={teamInfo._id} className="teamStats">
        <h1>{teamInfo.teamName}</h1>
        <button onClick={this.toTournament.bind(this, teamInfo.tournament)}>Go to tournament</button>
      </div>
    ))
    return(
      <div>
        {teamsInfo}
      </div>
    )
  }
}

const mapStateToProps = ({team}) => ({
  team: team.teams
})

export default withRouter(connect(mapStateToProps, actions)(UserTeam))
