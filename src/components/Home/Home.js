import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home(){
  return(
    <div className="home">
      <div className="home-nav">
        <div className="home-nav-info">
          <Link to="/create-tournament">
            <div className="home-nav-card">
              <div className="home-nav-image">
                <img src="https://az616578.vo.msecnd.net/files/2016/04/23/635970349166931025-361124085_soccer3.jpg" />
              </div>
              <h4>Create a tournament</h4>
            </div>
          </Link>
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
  )
}
