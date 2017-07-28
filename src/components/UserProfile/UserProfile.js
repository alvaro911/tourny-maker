import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class UserProfile extends Component {

  render() {
    return (
      <div className="user-profile">
        <main>
          <h1>User profile</h1>
          <h2>{this.props.user}</h2>
          <div className="userInfo">
            <h3><b>Name</b> {this.props.firstName}</h3>
            <h3><b>Last name</b> {this.props.lastName}</h3>
            <h3><b>E-mail</b> {this.props.email}</h3>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  user: user.userName,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email
})

export default connect(mapStateToProps, actions)(UserProfile)
