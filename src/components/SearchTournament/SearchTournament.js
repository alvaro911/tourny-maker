import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import * as actions from '../../actions';
import './SearchTournament.css';

class SearchTournament extends Component {
  componentWillMount() {
    this.props.getTournamentsActions();
  }

  render() {
    const tournamentArr = this.props.tournament.map(item =>
      (<div key={item.id} className="tournament-card">
        <h3>
          {item.tournamentName}
        </h3>
        <p>Teams in the league</p>
        <p>
          4/{item.numberOfTeams}
        </p>
        <p>
          City: {item.city}
        </p>
        <h5>
          Created by: {item.user.userName}
        </h5>
      </div>),
    );
    if (!this.props.tournament) {
      return (
        <div>
          <h2>Loading...</h2>
          <Spinner
            name="ball-pulse-rise"
            color="steelblue"
          />
        </div>
      );
    }
    return (
      <div className="search-tournament">
        <h2 className="Anton">Search for a league</h2>
        <p>
          Ready to show the world what you and your friends
          are made of? Look at all the tournaments in your
          area and pick the one you would like to
          participate in. Pay attenttion when we the
          tournament starts. Are you looking for a
          tournament in particular? Use the search bar to
          find the one you are looking for, you can look for
          Tournament Name or by tournament creator name
        </p>

        <form className="tournament-form">
          <label htmlFor="state">State</label>
          <input name="state" className="location" type="text" />
          <label htmlFor="city">City</label>
          <input name="city" className="location" type="text" />
          <label htmlFor="zipCode">Zip code</label>
          <input name="zipCode" className="location" type="text" />

          <button type="submit">Search</button>
        </form>
        <div className="tournament-list">
          {tournamentArr}
        </div>
      </div>
    );
  }
}
SearchTournament.defaultProps = {
  tournament: [],
};
SearchTournament.propTypes = {
  tournament: PropTypes.array.isRequired,
};

const mapStateToProps = ({ tournament }) => tournament;

export default withRouter(
  connect(mapStateToProps, actions)(SearchTournament),
);
