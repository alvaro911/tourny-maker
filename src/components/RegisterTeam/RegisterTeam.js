import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions';

import './RegisterTeam.css';

class RegisterTeam extends Component {
  constructor() {
    super();
    this.state = {
      teamName: '',
      players: {},
    };
  }

  componentWillMount() {
    this.props.getTournamentById(
      this.props.match.params.id,
    );
  }

  async submitForm(e) {
    e.preventDefault();
    const tournamentId = this.props.match.params.id;
    try {
      await this.props.createTeamAction({
        teamName: this.state.teamName,
        players: Object.values(this.state.players)
      }, tournamentId)
      this.props.history.push('/')
    } catch (err) {
      throw e;
    }
  }

  teamInfo(e, i) {
    this.setState({
      players: {
        ...this.state.players,
        [i]: {
          ...this.state.players[i],
          [e.target.name]: e.target.value
        }
      }
    });
  }

  teamNameInfo(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if(!this.props.t){
      return <h1>loading...</h1>
    }

    const fields = Array.from({length: this.props.t.minimumNumPlayers}).map((field, i) =>
      (<div key={i} className="player-field-container">
        <div className="name">
          <label htmlFor="playerName">Name</label>
          <input
            id={`playerName-${i}`}
            name="playerName"
            type="text"
            placeholder="Name"
            value={this.state.players[i] != null ? this.state.players[i].playerName : ''}
            onChange={e => this.teamInfo(e, i)}
          />
        </div>
        <div className="jersey">
          <label htmlFor="playerNumber">No.</label>
          <input
            id={`playerNumber-${i}`}
            name="playerNumber"
            type="text"
            placeholder="10"
            value={this.state.players[i] != null ? this.state.players[i].playerNumber : ''}
            onChange={e => this.teamInfo(e, i)}
          />
        </div>
      </div>)
    );
    return (
      <div className="register-team">
        <article>
          <h2 className="Anton">Instructions</h2>
          Maecenas non justo mollis, tempus libero vel,
          auctor quam. Vestibulum vestibulum mattis ligula
          at congue. Donec felis sapien, vulputate eget
          dolor vitae, ornare lobortis tellus. Etiam sed
          ullamcorper lorem. Nulla semper urna ut odio
          dictum auctor id quis lacus. Pellentesque turpis
          tortor, egestas et faucibus id, semper mollis
          magna. Pellentesque hendrerit ultricies ex, vel
          porttitor elit eleifend eget. Cras imperdiet
          fermentum nibh, id tempus magna gravida a.
        </article>
        <form
          className="register-form"
          onSubmit={e => this.submitForm(e)}
        >
          <h1>
            {this.props.t.tournamentName}
          </h1>
          <div className="teamName">
            <label htmlFor="teamName">Team Name</label>
            <input
              name="teamName"
              type="text"
              value={this.state.teamName}
              onChange={e => this.teamNameInfo(e)}
            />
          </div>
          {fields}
          <button>Register Team</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ tournament }) => ({
  t: tournament.tournaments[0],
});

export default withRouter(connect(mapStateToProps, actions)(
  RegisterTeam,
));
