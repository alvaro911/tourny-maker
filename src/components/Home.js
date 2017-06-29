import React from 'react';

import './Home.css';

export default function Home(){
  return(
    <div className="home">
      <div className="home-nav">
        <div className="home-nav-info">
          <div className="home-nav-card">
            <div className="home-nav-image">
              <img src="https://az616578.vo.msecnd.net/files/2016/04/23/635970349166931025-361124085_soccer3.jpg" />
            </div>
            <h4>Create a tournament</h4>
          </div>
          <div className="home-nav-card">
            <div className="home-nav-image">
              <img src="https://az616578.vo.msecnd.net/files/2016/04/23/635970349166931025-361124085_soccer3.jpg" />
            </div>
            <h4>Look for tournament</h4>
          </div>
          <div className="home-nav-card">
            <div className="home-nav-image">
              <img src="https://az616578.vo.msecnd.net/files/2016/04/23/635970349166931025-361124085_soccer3.jpg" />
            </div>
            <h4>Existing tournament</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
