import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import './user.css';

class UserTournaments extends Component {
  componentWillMount() {
    this.props.getTournamentsByUserId(this.props.id);
  }

  deleteTourny(id) {
    this.props.deleteTournamentAction(id);
  }

  render() {
    const tournaments = this.props.userTournyArr.map(
      (item, i) =>
        <div className="tourny" key={item._id}>
          <div className="tourny-number">
            <h2>
              {i + 1}
            </h2>
          </div>
          <div className="tourny-name">
            <h2>
              {item.tournamentName}
            </h2>
          </div>
          <div className="tourny-actions">
            <button>update</button>
            <button
              onClick={this.deleteTourny.bind(
                this,
                item._id,
              )}
            >
              delete
            </button>
          </div>
        </div>,
    );

    if (!this.props.userTournyArr) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        {tournaments}
      </div>
    );
  }
}

UserTournaments.defaultProps = {
  userTournyArr: [],
};
UserTournaments.propTypes = {
  userTournyArr: PropTypes.array,
};

const mapStateToProps = ({ user, tournament }) => ({
  userTournyArr: tournament.userTournaments,
  id: user._id,
});

export default connect(mapStateToProps, actions)(
  UserTournaments,
);
