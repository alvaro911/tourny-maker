import React from 'react';

import './SearchTournament.css';

export default function SearchTournament() {
  return (
    <div className="search-tournament">
      <h2 className="Anton">Search for a league</h2>
      <p>
        Ready to show the world what you and your friends
        are made of? Look at all the tournaments in your
        area and pick the one you would like to participate
        in. Pay attenttion when we the tournament starts.
        Are you looking for a tournament in particular? Use
        the search bar to find the one you are looking for,
        you can look for Tournament Name or by tournament
        creator name
      </p>

      <form className="tournament-form">
        <label>State</label>
        <input className="location" type="text" />
        <label>City</label>
        <input className="location" type="text" />
        <label>Zip code</label>
        <input className="location" type="text" />
        <label>Search</label>
        <input type="text" />
      </form>
      <div className="tournament-list">
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
        <div className="tournament-card">
          <h3>Name of the tournament</h3>
          <p>Teams in the league</p>
          <p>4/10</p>
          <p>City: Denver</p>
          <h5>Created by: John Doe</h5>
        </div>
      </div>
    </div>
  );
}
