import React from 'react';

export default function Login() {
  return (
    <div className="login">
      <div>
        <form>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />

          <button>Login</button>
        </form>
        <p>or</p>
        <button className="fb-btn">Sign up with facebook</button>
      </div>
    </div>
  )
}
