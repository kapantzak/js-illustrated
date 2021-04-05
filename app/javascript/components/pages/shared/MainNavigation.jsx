import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => (
  <nav className="main-navigation">
    <div className="logo">JS Illustrated</div>
    <ul className="menu-items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
