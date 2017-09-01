import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import * as actions from '../../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      formSubmitted: false,
      loader: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.userInfo = this.userInfo.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({
      formSubmitted: true,
      loader: true,
    });
    try {
      await this.props.loginAction(this.state);
      this.props.history.push('/');
    } catch (err) {
      throw err;
    }
  }

  userInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

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
    if(this.state.loader){
      return(
        <div className="loader">
          <Spinner name="ball-spin-fade-loader" color="coral" />
        </div>
      )
    }
    return (
      <div className="login">
        <div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              onChange={this.userInfo}
              value={this.state.email}
            />
            <label htmlFor="password">Password</label>
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
