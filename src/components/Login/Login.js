import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      password: '',
      email: '',
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.dispatch(login(this.state))
  }

  userInfo = e => {
    // console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render(){
    return (
      <div className="login">
        <div>
          <form onSubmit={this.onSubmit}>
            <label>E-mail</label>
            <input type="email" name="email" onChange={this.userInfo} value={this.state.email}/>
            <label>Password</label>
            <input type="password" name="password" onChange={this.userInfo} value={this.state.password}/>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(Login);
