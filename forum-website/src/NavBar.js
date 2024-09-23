// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    setUser(null); // Clear user state
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./TiersLogo.png" alt="Forum Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/HomePage">Home</Link></li>
        <li><Link to="/TierList">Post</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="auth-buttons">
        {!user ? (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
          </>
        ) : (
          <>
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout} className="nav-button">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
