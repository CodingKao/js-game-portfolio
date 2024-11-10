// GameList.jsx
import React from 'react';
import './gamelist.css';

const GameList = () => {
  const games = [
    { name: 'Stock Market Simulator', description: 'Learn to trade and invest in a virtual market.' },
    { name: 'Budget Builder', description: 'Practice building monthly budgets and tracking expenses.' },
    { name: 'Retirement Planner', description: 'Plan your retirement savings strategy and future expenses.' },
    { name: 'Loan Repayment Challenge', description: 'Learn how loans and interest work by managing debt.' },
    { name: 'Investment Portfolio Manager', description: 'Create and balance a diversified investment portfolio.' },
  ];

  return (
    <section className="game-list">
      <h3>Our Games</h3>
      <ul>
        {games.map((game, index) => (
          <li key={index} className="game-item">
            <h4>{game.name}</h4>
            <p>{game.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GameList;
