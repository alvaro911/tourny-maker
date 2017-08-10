import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Home.css';

function Home({ user }) {
  if (!user.isLogged) {
    return (
      <div className="intro paragraph">
        <h1>Welcome to TOURNY MAKER</h1>
        <h3>
          The application to create/manage tournaments and
          teams easily, so what are you waiting for? Sign up
          or sign in and start creating champions.
        </h3>
        <div className="user-btns">
          <Link to="/sign-up">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="home">
      <div className="home-nav">
        <div className="home-nav-info">
          {user.role === 'CREATOR' &&
            <Link to="/create-tournament">
              <div className="home-nav-card-1">
                <div className="home-nav-image">

                  <h4>Create a tournament</h4>
                </div>
              </div>
            </Link>}
          <Link to="/search-tournament">
            <div className="home-nav-card-2">
              <div className="home-nav-image">

                <h4>Look for tournament</h4>
              </div>
            </div>
          </Link>
          <Link to="/me/tournaments">
            <div className="home-nav-card-3">
              <div className="home-nav-image">

                <h4>Dashboard</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  user: state.user,
}))(Home);
