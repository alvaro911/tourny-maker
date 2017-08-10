import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actions from '../../actions'

class UserTeam extends Component{
  componentDidMount(){
    this.props.getTeamByUserId(this.props.user._id)
  }
  render(){
    if(!this.props.team){
      return(
        <h1>Loading...</h1>
      )
    }
    return(
      <div>
        Hello
      </div>
    )
  }
}

const mapStateToProps = ({user, team}) => (
  {
    user,
    team
  }
)

export default connect(mapStateToProps, actions)(UserTeam)
