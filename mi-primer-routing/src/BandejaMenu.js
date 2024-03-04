import React from 'react';
import { NavLink } from 'react-router-dom';

function BandejaMenu() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BandejaMenu;
