import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class UserProfile extends Component {
  render() {
    return (
      <div className="user-profile">
        <h1 className="Source-Sans">User profile</h1>
        <div className="userInfo">
          <h2>
            <b>Username</b> {this.props.user}
          </h2>
          <h3>
            <b>Name</b> {this.props.firstName}
          </h3>
          <h3>
            <b>Last name</b> {this.props.lastName}
          </h3>
          <h3>
            <b>E-mail</b> {this.props.email}
          </h3>
        </div>
        <Link to="/me/update">
          <button>Update profile</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.userName,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  id: user.id,
  role: user.role,
});

export default connect(mapStateToProps, actions)(
  UserProfile,
);
