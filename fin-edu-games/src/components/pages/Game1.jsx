import React, { useState } from "react";
import piggyBank from "../../assets/piggy-bank.png";
import piggyBankBreak from "../../assets/piggy-bank-break.png";
import coin from "../../assets/coin.png";

const Game1 = () => {
  // State variables
  const [age, setAge] = useState(25);
  const [savings, setSavings] = useState(0);
  const [log, setLog] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [showCoins, setShowCoins] = useState(false);

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
    setShowCoins(false);
  };

  // Trigger coin animation when piggy bank breaks
  const progress = Math.min((savings / goal) * 100, 100);

  if (progress >= 100 && !showCoins) {
    setShowCoins(true);
    setTimeout(() => setShowCoins(false), 3000); // End animation after 3 seconds
  }

  return (
    <div style={{ padding: "20px" }}>
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

        {/* Progress Bar */}
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

        <button onClick={handleNextYear} disabled={gameOver}>
          {gameOver ? "Game Over" : "Next Year"}
        </button>
        <button onClick={resetGame} style={{ marginLeft: "10px" }}>
          Reset Game
        </button>
      </div>

      {/* Main Layout */}
      <div style={{ display: "flex", marginTop: "20px" }}>
        {/* Event Log */}
        <div style={{ flex: 2, marginRight: "20px" }}>
          <h3>Event Log:</h3>
          <ul>
            {log.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>

        {/* Piggy Bank Icon */}
        <div style={{ flex: 1, textAlign: "center", position: "relative" }}>
          <img
            src={progress >= 100 ? piggyBankBreak : piggyBank}
            alt={progress >= 100 ? "Broken Piggy Bank" : "Piggy Bank"}
            style={{
              width: "150px",
              height: "150px",
            }}
          />
          {/* Coin Animation */}
          {showCoins &&
            Array(10)
              .fill(0)
              .map((_, index) => (
                <img
                  key={index}
                  src={coin}
                  alt="Coin"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "30px",
                    height: "30px",
                    animation: `shoot-out ${3}s ease-in-out`,
                    transform: `translate(-50%, -50%) rotate(${
                      index * 36
                    }deg)`,
                  }}
                />
              ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes shoot-out {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(calc(-50% + (50px - 50vw)), calc(-50% - 200px)) scale(0.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Game1;
