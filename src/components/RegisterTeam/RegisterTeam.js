import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './RegisterTeam.css';

class RegisterTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      playerName: '',
      playerNumber: 0,
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
      console.log(this.state);
      // awathis.props.createTeamAction()
    } catch (err) {
      throw e;
    }
  }

  teamInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const stuff = [];
    if (!this.props.t) {
      return <h1>Loading...</h1>;
    } else {
      for (
        let i = 0;
        i < this.props.t.minimumNumPlayers;
        i++
      ) {
        stuff.push(i);
      }
    }
    const fields = stuff.map((field, i) =>
      <div key={i} className="player-field-container">
        <div className="name">
          <label htmlFor="playerName">Name</label>
          <input
            name="playerName"
            type="text"
            placeholder="Name"
            value={this.state.playerName}
            onChange={this.teamInfo}
          />
        </div>
        <div className="jersey">
          <label htmlFor="playerNumber">No.</label>
          <input
            name="playerNumber"
            type="text"
            placeholder="10"
            value={this.state.playerNumber}
            onChange={this.teamInfo}
          />
        </div>
      </div>,
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
          onSubmit={this.submitForm}
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
              onChange={this.teamInfo}
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

export default connect(mapStateToProps, actions)(
  RegisterTeam,
);
