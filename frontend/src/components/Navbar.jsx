import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Study Platform</div>
      <div className="icons">
        <span role="img" aria-label="notifications">🔔</span>
        <span role="img" aria-label="profile">👤</span>
        <span role="img" aria-label="settings">⚙️</span>
      </div>
    </nav>
  );
};

export default Navbar;
