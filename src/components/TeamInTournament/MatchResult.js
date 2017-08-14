import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

class MatchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalsA: 0,
      goalsB: 0,
      fullTime: false,
    };
  }

  async componentDidMount() {
    if (!this.props.m) {
      await this.props.getMatchById(
        this.props.match.params.id,
      );
    }
    this.setState({
      goalsA: this.props.m.goalsA,
      goalsB: this.props.m.goalsB,
    });
  }

  async submitResult(e) {
    e.preventDefault();
    const path = this.props.m.tournamentId;
    try {
      this.setState({
        fullTime: true,
      });
      // console.log('WHAT IS M', this.props.m.tournamentId)
      await this.props.finalRes(
        this.props.match.params.id,
        this.state,
      );
      this.props.history.goBack(`/tournament/${path}`);
    } catch (err) {
      throw err;
    }
  }

  changeGoals(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  goBack() {
    const path = this.props.m.tournamentId
    this.history.props.goBack(`/tournament/${path}`)
  }

  render() {
    if (!this.props.m) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <button onClick={this.goBack}>Back</button>
        <form onSubmit={e => this.submitResult(e)}>
          <label htmlFor="goalsA">
            {this.props.m.teamA.teamName}
          </label>
          <input
            type="text"
            name="goalsA"
            onChange={e => this.changeGoals(e)}
            value={this.state.goalsA}
            required
          />
          <h3>vs</h3>
          <label htmlFor="goalsB">
            {this.props.m.teamB.teamName}
          </label>
          <input
            type="text"
            name="goalsB"
            onChange={e => this.changeGoals(e)}
            value={this.state.goalsB}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ match }, ownProps) => ({
  m: match.matches.find(
    f => f._id === ownProps.match.params.id,
  ),
});

export default withRouter(
  connect(mapStateToProps, actions)(MatchResult),
);
