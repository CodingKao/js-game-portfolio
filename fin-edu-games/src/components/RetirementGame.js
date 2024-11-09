// GAME OVERVIEW

/// Retirement Game is an interactive and educational game that simulates the journey of saving for retirement. In this game, you’ll experience the impact of saving regularly, making financial decisions, and facing unexpected life events that can affect your retirement savings. The goal is to accumulate $1,000,000 or more by the time you reach the retirement age of 65.

// How to Play
// Start the Game: You will begin at age 25 with $10,000 in savings.
// Make Financial Decisions: Each round represents one year. You will be able to adjust your monthly contribution and set your annual interest rate to plan for your future.
// Handle Life Events: Life is unpredictable! Every year, you might face unexpected events like bonuses or expenses, which will impact your savings.
// Track Your Progress: After each round, you’ll see how close you are to reaching your retirement goal and how much you've saved.
// End Game: The game ends when you reach the age of 65, at which point your total savings are revealed. If you hit the $1,000,000 mark, you win!

// The ultimate goal of the Retirement Game is to save $1,000,000 or more by the time you retire. Manage your savings wisely and learn about the power of compound interest while navigating the twists and turns of real-life financial scenarios. Can you reach your retirement goal?

// src/RetirementGame.js

import React, { useState } from 'react';

const RetirementGame = () => {
  const [currentAge, setCurrentAge] = useState(25); // Default starting age
  const [retirementAge] = useState(65); // Fixed retirement age
  const [currentSavings, setCurrentSavings] = useState(10000); // Starting savings
  const [monthlyContribution, setMonthlyContribution] = useState(500); // Default contribution
  const [annualInterestRate, setAnnualInterestRate] = useState(5); // Default interest rate
  const [gameYear, setGameYear] = useState(0); // Game rounds
  const [goal] = useState(1000000); // Retirement goal

  const [gameMessage, setGameMessage] = useState('');
  const [projectedSavings, setProjectedSavings] = useState(currentSavings);

  const nextYear = () => {
    if (currentAge + gameYear >= retirementAge) {
      setGameMessage(`You have reached retirement age with $${projectedSavings.toFixed(2)}!`);
      return;
    }

    const monthsInYear = 12;
    const interestRate = annualInterestRate / 100;
    const monthlyRate = interestRate / 12;
    
    let newSavings = projectedSavings;
    
    // Calculate new savings with contribution and interest
    for (let i = 0; i < monthsInYear; i++) {
      newSavings += monthlyContribution;
      newSavings += newSavings * monthlyRate;
    }

    // Random events
    const randomEvent = Math.random();
    if (randomEvent < 0.2) {
      newSavings -= 5000; // Unexpected expense
      setGameMessage("Oops! You faced an unexpected medical bill of $5,000!");
    } else if (randomEvent < 0.5) {
      newSavings += 3000; // Bonus income
      setGameMessage("Good news! You received a bonus income of $3,000 this year!");
    } else {
      setGameMessage("A regular year with no major events.");
    }

    setProjectedSavings(newSavings);
    setGameYear(gameYear + 1);
  };

  return (
    <div style={styles.container}>
      <h1>Retirement Game</h1>
      <div style={styles.info}>
        <p><strong>Goal:</strong> Save $1,000,000 by age 65</p>
        <p><strong>Current Age:</strong> {currentAge + gameYear}</p>
        <p><strong>Projected Savings:</strong> ${projectedSavings.toFixed(2)}</p>
        <p><strong>Message:</strong> {gameMessage}</p>
      </div>

      <div style={styles.inputContainer}>
        <label>Monthly Contribution:</label>
        <input
          type="number"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(parseFloat(e.target.value))}
        />
      </div>

      <div style={styles.inputContainer}>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(parseFloat(e.target.value))}
        />
      </div>

      <button style={styles.button} onClick={nextYear}>
        Next Year
      </button>

      {currentAge + gameYear >= retirementAge && (
        <div style={styles.result}>
          <h2>Congratulations! You have retired with ${projectedSavings.toFixed(2)}</h2>
          {projectedSavings >= goal ? <p>You reached your retirement goal!</p> : <p>You didn't reach your goal, but it's never too late to plan better!</p>}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  info: {
    marginBottom: '20px',
  },
  inputContainer: {
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '18px',
    color: 'teal',
  },
};

export default RetirementGame;
