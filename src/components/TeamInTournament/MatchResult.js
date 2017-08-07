import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actions from '../../actions'

class MatchResult extends Component{

  constructor(){
    super()
    this.state = {
      goalsA: 0,
      goalsB: 0,
      teamA: '',
      teamB: '',
      fullTime: false
    }
  }

  componentDidMount() {
    if(!this.props.m){
      this.props.getMatchById(this.props.match.params.id)
    }
  }

  async submitResult(e){
    e.preventDefault()
    try {
      this.setState({
        fullTime: true,
        teamA: this.props.m.teamA._id,
        teamB: this.props.m.teamB._id,
      })
      await this.props.finalRes(this.props.match.params.id, this.state)
      window.history.back()
    } catch (err) {
      throw err
    }
  }

  changeGoals(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  goBack(){
    window.history.back()
  }

  render(){
    if(!this.props.m){
      return(
        <h1>Loading...</h1>
      )
    }
    return(
      <div>
        <button onClick={this.goBack}>Back</button>
        <form onSubmit={e => this.submitResult(e)}>
          <label htmlFor="goalsA">{this.props.m.teamA.teamName}</label>
          <input type="text" name="goalsA" onChange={e => this.changeGoals(e)} value={this.state.goalsA} required />
          <h3>vs</h3>
          <label htmlFor="goalsB">{this.props.m.teamB.teamName}</label>
          <input type="text" name="goalsB" onChange={e => this.changeGoals(e)} value={this.state.goalsB} required />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({match}, ownProps) => (
  {
    m: match.matches.find(f =>
      f._id === ownProps.match.params.id
    )
  }
)

export default withRouter(connect(mapStateToProps, actions)(MatchResult))
