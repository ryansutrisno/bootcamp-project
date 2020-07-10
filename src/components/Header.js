import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="App-header-nav">
    <h1 style={{ marginLeft: 20 }}>My Project</h1>
    <div className="App-nav">
      <NavLink
        style={{ margin: 10, color: '#61dafb' }}
        to="/"
        activeClassName="is-active"
        exact={true}>
        Home
      </NavLink>
      <NavLink
        style={{ margin: 10, color: '#61dafb' }}
        to="/about"
        activeClassName="is-active">
        About
      </NavLink>
      <NavLink
        style={{ margin: 10, color: '#61dafb' }}
        to="/contact"
        activeClassName="is-active">
        Contact
      </NavLink>
      <NavLink
        style={{ margin: 10, color: '#61dafb' }}
        to="/aplikasi-keputusan"
        activeClassName="is-active">
        Aplikasi Keputusan
      </NavLink>
    </div>
  </header>
);

export default Header;
