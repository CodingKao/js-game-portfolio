// Navbar.jsx
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#game1">Game 1</a></li>
        <li><a href="#game2">Game 2</a></li>
        <li><a href="#game3">Game 3</a></li>
        <li><a href="#game4">Game 4</a></li>
        <li><a href="#game5">Game 5</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
