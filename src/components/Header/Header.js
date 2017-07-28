import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './Header.css';
import * as actions from '../../actions';

class Header extends Component {
  constructor(){
    super();
    this.userLogout = this.userLogout.bind(this)
  }
  async userLogout() {
    try {
      await this.props.logout();
      this.props.history.push('/');
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <nav>
        <Link to="/">
          <h1 className="Anton">Tourney Maker</h1>
        </Link>
        {this.props.isLogged
          ? <ul>
              <li>
                <Link to="/me">{this.props.user}</Link>
              </li>
              <li onClick={this.userLogout}>Logout</li>
            </ul>
          : <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>}
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isLogged: user.isLogged,
  user: user.userName,
});

export default withRouter(connect(mapStateToProps, actions)(Header));
