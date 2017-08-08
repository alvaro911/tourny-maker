import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Home.css';

function Home({ user }) {
  if (!user.isLogged) {
    return <h1>Plz loggin</h1>;
  }
  return (
    <div className="home">
      <div className="home-nav">
        <div className="home-nav-info">
          {user.role === 'CREATOR' && <Link to="/create-tournament">
            <div className="home-nav-card">
              <div className="home-nav-image">
                <img src="https://az616578.vo.msecnd.net/files/2016/04/23/635970349166931025-361124085_soccer3.jpg" />
              </div>
              <h4>Create a tournament</h4>
            </div>
          </Link>}
          <Link to="search-tournament">
            <div className="home-nav-card">
              <div className="home-nav-image">
                <img src="https://az616578.vo.msecnd.net/files/2016/04/23/635970349166931025-361124085_soccer3.jpg" />
              </div>
              <h4>Look for tournament</h4>
            </div>
          </Link>
          <Link to="register-team">
            <div className="home-nav-card">
              <div className="home-nav-image">
                <img src="https://az616578.vo.msecnd.net/files/2016/04/23/635970349166931025-361124085_soccer3.jpg" />
              </div>
              <h4>Existing tournament</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({
  user: state.user
}))(Home);
