// pages/Game1.jsx
import React, { useState } from "react";

const Game1 = () => {
  // State variables
  const [age, setAge] = useState(25);
  const [savings, setSavings] = useState(0);
  const [log, setLog] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // Constants
  const retirementAge = 65;
  const salary = 50000;
  const yearlyExpenses = 30000;
  const interestRate = 0.05;
  const goal = 1000000;

  const financialEvents = [
    { description: "Unexpected medical bill", amount: -5000 },
    { description: "Car repair costs", amount: -2000 },
    { description: "Bonus at work!", amount: 3000 },
    { description: "Investment gain", amount: 4000 },
    { description: "Vacation expenses", amount: -1500 },
    { description: "Won a lottery!", amount: 10000 },
  ];

  // Function to simulate one year of finances
  const handleNextYear = () => {
    if (age >= retirementAge) {
      checkRetirement();
      return;
    }

    // Increment age
    const newAge = age + 1;

    // Add salary and deduct expenses
    let newSavings = savings + salary - yearlyExpenses;

    // Apply compound interest
    newSavings *= 1 + interestRate;

    // Trigger a random financial event
    const randomEvent =
      financialEvents[Math.floor(Math.random() * financialEvents.length)];
    newSavings += randomEvent.amount;

    // Log the event
    const eventMessage = `At age ${newAge}, ${randomEvent.description} (${randomEvent.amount >= 0 ? "+" : ""}$${randomEvent.amount})`;
    setLog((prevLog) => [...prevLog, eventMessage]);

    // Update state
    setAge(newAge);
    setSavings(newSavings);

    // Check if the game should end
    if (newAge >= retirementAge) {
      checkRetirement(newSavings);
    }
  };

  // Function to check if the player reached their retirement goal
  const checkRetirement = (finalSavings = savings) => {
    setGameOver(true);
    if (finalSavings >= goal) {
      setLog((prevLog) => [
        ...prevLog,
        "Congratulations! You've saved $1,000,000 and reached your retirement goal!",
      ]);
    } else {
      setLog((prevLog) => [
        ...prevLog,
        "Unfortunately, you didn't reach $1,000,000. Keep practicing your financial skills!",
      ]);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setAge(25);
    setSavings(0);
    setLog([]);
    setGameOver(false);
  };

  // Calculate progress for progress bar
  const progress = Math.min((savings / goal) * 100, 100);

  return (
    <div>
      <h1>The Retirement Game</h1>
      <p>
        Can you save $1,000,000 or more by the time you retire? Manage your
        savings wisely!
      </p>

      <div>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Savings:</strong> ${savings.toFixed(2)}
        </p>
        <div style={{ margin: "20px 0" }}>
          <div
            style={{
              width: "100%",
              height: "20px",
              backgroundColor: "#e0e0e0",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                backgroundColor: progress >= 100 ? "#4caf50" : "#2196f3",
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
          <p>{progress.toFixed(2)}% of your goal achieved!</p>
        </div>
      </div>

      <button onClick={handleNextYear} disabled={gameOver}>
        {gameOver ? "Game Over" : "Next Year"}
      </button>
      <button onClick={resetGame} style={{ marginLeft: "10px" }}>
        Reset Game
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Event Log:</h3>
        <ul>
          {log.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game1;