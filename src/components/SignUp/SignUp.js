import React from 'react';

import './SignUp.css'

export default function SignUp() {
  return (
    <div className="login">
      <div>
        <form>
          <label>Name</label>
          <input type="text" required/>
          <label>Last name</label>
          <input type="text" required/>
          <label>Username</label>
          <input type="text" required/>
          <label>Password</label>
          <input type="password" required/>
          <label>Confirm password</label>
          <input type="password" required/>

          <button>Sign Up</button>
        </form>
        <p>or</p>
        <button className="fb-btn">Sign up with facebook</button>
      </div>
    </div>
  )
}
