import React from 'react';

import './CreateTournament.css';

export default function CreateTournament() {
  return(
    <div className="create-tournament">
      <article>
        <h2 className="Anton">Instructions</h2>
        Maecenas non justo mollis, tempus libero vel, auctor quam. Vestibulum vestibulum mattis ligula at congue. Donec felis sapien, vulputate eget dolor vitae, ornare lobortis tellus. Etiam sed ullamcorper lorem. Nulla semper urna ut odio dictum auctor id quis lacus. Pellentesque turpis tortor, egestas et faucibus id, semper mollis magna. Pellentesque hendrerit ultricies ex, vel porttitor elit eleifend eget. Cras imperdiet fermentum nibh, id tempus magna gravida a.

        <h2 className="Anton">Instructions 2</h2>
        Maecenas non justo mollis, tempus libero vel, auctor quam. Vestibulum vestibulum mattis ligula at congue. Donec felis sapien, vulputate eget dolor vitae, ornare lobortis tellus. Etiam sed ullamcorper lorem. Nulla semper urna ut odio dictum auctor id quis lacus. Pellentesque turpis tortor, egestas et faucibus id, semper mollis magna. Pellentesque hendrerit ultricies ex, vel porttitor elit eleifend eget. Cras imperdiet fermentum nibh, id tempus magna gravida a.
      </article>
      <div className="make-team">
        <form>
          <label>Tournament name</label>
          <input type="text" placeholder="something league" required/>
          <label>Number of teams</label>
          <input type="text" placeholder="6" required/>
          <label>Minimum amount of players per team</label>
          <input type="text" placeholder="13" required/>
          <label>Where will be played</label>
          <input type="text" placeholder="Main 123 N" required/>
          <label>City</label>
          <input type="text" placeholder="Denver" required/>
          <label>State</label>
          <input type="text" placeholder="Colorado" required/>
          <label>Zip code</label>
          <input type="text" placeholder="80537" required/>

          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
