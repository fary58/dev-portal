import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i className="fas fa-code"></i> DevConnector
        </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <a href="posts.html">Posts</a>
        </li>
        <li>
          |
          <Link to="/dashboard" title="Dashboard">
            <i className="fas fa-user"></i>
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/login" title="Logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;