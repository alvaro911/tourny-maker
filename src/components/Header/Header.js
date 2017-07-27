import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

function Header({ isLogged }) {
  return (
    <nav>
      <Link to="/">
        <h1 className="Anton">Tourney Maker</h1>
      </Link>
      {isLogged
        ? <ul>
            <li>username</li>
            <li>Logout</li>
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

function mapState(state) {
  return {
    isLogged: state.user.isLogged,
  };
}

export default connect(mapState)(Header);
