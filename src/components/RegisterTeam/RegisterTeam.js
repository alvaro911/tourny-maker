import React from 'react';

import './RegisterTeam.css';

export default function RegisterTeam() {
  return (
    <div className="register-team">
      <article>
        <h2 className="Anton">Instructions</h2>
        Maecenas non justo mollis, tempus libero vel, auctor
        quam. Vestibulum vestibulum mattis ligula at congue.
        Donec felis sapien, vulputate eget dolor vitae,
        ornare lobortis tellus. Etiam sed ullamcorper lorem.
        Nulla semper urna ut odio dictum auctor id quis
        lacus. Pellentesque turpis tortor, egestas et
        faucibus id, semper mollis magna. Pellentesque
        hendrerit ultricies ex, vel porttitor elit eleifend
        eget. Cras imperdiet fermentum nibh, id tempus magna
        gravida a.
      </article>
      <form className="register-form">
        <div className="name">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="jersey">
          <label>No.</label>
          <input type="text" />
        </div>
        <div className="name">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="jersey">
          <label>No.</label>
          <input type="text" />
        </div>
        <div className="name">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="jersey">
          <label>No.</label>
          <input type="text" />
        </div>

        <button>Register Team</button>
      </form>
    </div>
  );
}
