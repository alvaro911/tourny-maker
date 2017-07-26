import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <nav>
      <Link to="/"><h1 className="Anton">Tourney Maker</h1></Link>
      <ul>
        <li>username</li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sign-up">Sign Up</Link></li>
        <li>Logout</li>
      </ul>
    </nav>
  )
}
