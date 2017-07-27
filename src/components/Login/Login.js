import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      formSubmitted: false,
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    this.setState({
      formSubmitted: true,
    });
    try {
      await this.props.loginAction(this.state);
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  userInfo = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  get passwordValidation() {
    if (
      this.state.password.length < 6 &&
      this.state.formSubmitted
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="login">
        <div>
          <form onSubmit={this.onSubmit}>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              onChange={this.userInfo}
              value={this.state.email}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.userInfo}
              value={this.state.password}
            />
            {this.passwordValidation && <p>Error</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Login);
