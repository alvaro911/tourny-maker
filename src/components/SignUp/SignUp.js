import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUp } from '../../actions/userActions';
import './SignUp.css';

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      role: 'PLAYER',
      showError: false,
      errorMsg: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.userInfo = this.userInfo.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    if (
      !this.checkPassword(this.state.password) &&
      this.state.password.length < 6
    ) {
      this.setState({
        showError: true,
        errorMsg:
          'Password should be at least be 6 characters long, have one capital letter and one number',
      });
    } else if (!this.isValidEmail(this.state.email)) {
      this.setState({
        showError: true,
        errorMsg: 'Not a valid e-mail address',
      });
    } else if (
      this.state.password !== this.state.confirmPassword
    ) {
      this.setState({
        showError: true,
        errorMsg: "Passwords don't match",
      });
    } else {
      try {
        this.props.dispatch(signUp(this.state));
        this.props.history.push('/');
      } catch (err) {
        throw err;
      }
    }
  }

  checkPassword(pswrd) {
    return pswrd.match(passwordReg);
  }

  isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  userInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  roleChange(e) {
    this.setState({
      role: e.target.value,
    });
  }

  render() {
    return (
      <div className="login">
        {this.state.showError
          ? <div className="passwordErr">
              <h3>
                {this.state.errorMsg}
              </h3>
            </div>
          : null}
        <div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="firstName">Name</label>
            <input
              onChange={this.userInfo}
              value={this.state.firstName}
              name="firstName"
              type="text"
              required
            />
            <label htmlFor="lastName">Last name</label>
            <input
              onChange={this.userInfo}
              value={this.state.lastName}
              name="lastName"
              type="text"
              required
            />
            <label htmlFor="userName">Username</label>
            <input
              onChange={this.userInfo}
              value={this.state.userName}
              name="userName"
              type="text"
              required
            />
            <label htmlFor="email">E-mail</label>
            <input
              onChange={this.userInfo}
              value={this.state.email}
              name="email"
              type="email"
              required
            />
            <label htmlFor="role">Role</label>
            <select
              value={this.state.role}
              onChange={e => this.roleChange(e)}
            >
              <option value="CREATOR">Creator</option>
              <option value="PLAYER">Player</option>
            </select>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.userInfo}
              value={this.state.password}
              name="password"
              type="password"
              required
            />
            <label htmlFor="confirmPassword">
              Confirm password
            </label>
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
    );
  }
}

export default connect()(SignUp);
