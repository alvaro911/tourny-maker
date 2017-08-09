import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import './user.css';

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      userName: this.props.userName,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    try {
      // console.log(this.state);
      await this.props.updateAction(
        this.props._id,
        this.state,
      );
      this.props.history.push('/me');
    } catch (err) {
      throw err;
    }
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  deleteUser(id) {
    this.props.deleteAction(id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="update-user">
        <form onSubmit={this.onSubmit}>
            <label htmlFor="firstName">Name</label>
            <input
              onChange={this.updateInfo}
              name="firstName"
              value={this.state.firstName}
            />
            <label htmlFor="lastName">Last name</label>
            <input
              onChange={this.updateInfo}
              name="lastName"
              value={this.state.lastName}
            />
            <label htmlFor="userName">Username</label>
            <input
              onChange={this.updateInfo}
              name="userName"
              value={this.state.userName}
            />

          <button type="submit">Submit</button>
        </form>
        <button
          onClick={this.deleteUser.bind(
            this,
            this.props._id,
          )}
        >
          Delete user
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userName: user.userName,
  firstName: user.firstName,
  lastName: user.lastName,
  _id: user._id,
});

export default withRouter(
  connect(mapStateToProps, actions)(UserUpdate),
);
