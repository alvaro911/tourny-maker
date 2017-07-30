import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RegisterTeam.css';

class RegisterTeam extends Component {
  render() {
    console.log('***********************');
    console.log(this.props.numberOfTeams);
    console.log(this.props.tournament);
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
        <form className="register-form">
          <div className="teamName">
            <label htmlFor="teamName">Team Name</label>
            <input name="teamName" type="text" />
          </div>
          <div className="name">
            <label htmlFor="playerName">Name</label>
            <input name="playerName" type="text" />
          </div>
          <div className="jersey">
            <label htmlFor="playerNumber">No.</label>
            <input name="playerNumber" type="text" />
          </div>

          <button>Register Team</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ tournament }) => ({
  numberOfTeams: tournament.numberOfTeams,
  tournament: tournament.tournament,
});

export default connect(mapStateToProps)(RegisterTeam);
