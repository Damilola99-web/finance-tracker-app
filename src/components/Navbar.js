import React from 'react';
import { NavLink } from 'react-router-dom';

// css 
import './navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
          <li className="title">myMoni</li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/signup'>Sign up</NavLink></li>
      </ul>
    </nav>
  );
}
