// Navbar.jsx
import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game1">Game 1</Link></li>
        <li><Link to="/game2">Game 2</Link></li>
        <li><Link to="/game3">Game 3</Link></li>
        <li><Link to="/game4">Game 4</Link></li>
        <li><Link to="/game5">Game 5</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;