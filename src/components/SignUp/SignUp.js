import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../actions/userActions';
import './SignUp.css';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      userName:'',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.dispatch(signUp(this.state));
  }

  userInfo = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render(){
    return (
      <div className="login">
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Name</label>
            <input
              onChange={this.userInfo}
              value={this.state.firstName}
              name="firstName"
              type="text"
              required
            />
            <label>Last name</label>
            <input
              onChange={this.userInfo}
              value={this.state.lastName}
              name="lastName"
              type="text"
              required
            />
            <label>Username</label>
            <input
              onChange={this.userInfo}
              value={this.state.userName}
              name="userName"
              type="text"
              required
            />
          <label>E-mail</label>
            <input
              onChange={this.userInfo}
              value={this.state.email}
              name="email"
              type="email"
              required
            />
            <label>Password</label>
            <input
              onChange={this.userInfo}
              value={this.state.password}
              name="password"
              type="password"
              required
            />
            <label>Confirm password</label>
            <input
              onChange={this.userInfo}
              value={this.state.confirmPassword}
              name="confirmPassword"
              type="password"
              required
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(SignUp)
