import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import './CreateTournament.css';

class CreateTournament extends Component {
  constructor() {
    super();
    this.state = {
      tournamentName: '',
      numberOfTeams: 0,
      minimumNumPlayers: 0,
      startDate: '',
      countryState: '',
      address: '',
      city: '',
      zipCode: 0,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.tournamentInfo = this.tournamentInfo.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    try {
      await this.props.createTournamentAction(this.state);
      this.props.history.push('/')
    } catch (err) {
      throw err;
    }
  }

  tournamentInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="create-tournament">
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
          <h2 className="Anton">Instructions 2</h2>
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
        <div className="make-team">
          <form onSubmit={this.onSubmit}>
            <label htmlFor="tournamentName">
              Tournament name
            </label>
            <input
              onChange={this.tournamentInfo}
              type="text"
              placeholder="Name of the league"
              name="tournamentName"
              value={this.state.tournamentName}
              required
            />
            <label htmlFor="numberOfTeams">
              Number of teams
            </label>
            <input
              onChange={this.tournamentInfo}
              type="text"
              name="numberOfTeams"
              placeholder="6"
              value={this.state.numberOfTeams}
              required
            />
            <label htmlFor="minimumNumPlayers">
              Minimum amount of players per team
            </label>
            <input
              onChange={this.tournamentInfo}
              name="minimumNumPlayers"
              type="text"
              placeholder="13"
              value={this.state.minimumNumPlayers}
              required
            />
            <label htmlFor="startDate">
              Tournament Starts
            </label>
            <input
              name="startDate"
              type="date"
              placeholder="07/14/2017"
              onChange={this.tournamentInfo}
              value={this.state.startDate}
            />
            <label htmlFor="address">Address</label>
            <input
              onChange={this.tournamentInfo}
              name="address"
              type="text"
              placeholder="222 N Kurt Ln"
              value={this.state.address}
              required
            />
            <label htmlFor="city">City</label>
            <input
              onChange={this.tournamentInfo}
              name="city"
              type="text"
              placeholder="Denver"
              value={this.state.city}
              required
            />
            <label htmlFor="state">State</label>
            <input
              onChange={this.tournamentInfo}
              name="state"
              type="text"
              placeholder="Colorado"
              value={this.state.state}
              required
            />
            <label htmlFor="zipCode">Zip code</label>
            <input
              onChange={this.tournamentInfo}
              name="zipCode"
              type="text"
              placeholder="80537"
              value={this.state.zipCode}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(CreateTournament));
