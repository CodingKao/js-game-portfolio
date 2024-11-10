// HomePage.jsx
import React from 'react';
import './homepage.css';
import GameList from '../gamelist/Gamelist'

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="intro-section">
        <h2>Get Ready to Master Your Financial Skills!</h2>
        <p>
          SmartFinance Playground is your hub for exciting, interactive games that teach you the 
          fundamentals of personal finance, investing, and money management.
        </p>
      </section>

      <GameList />
    </div>
  );
};

export default HomePage;
