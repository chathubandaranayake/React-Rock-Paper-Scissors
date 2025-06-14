import React, { useState } from 'react';
import './App.css';

const choices = [
  { name: 'Rock', emoji: '✊' },
  { name: 'Paper', emoji: '✋' },
  { name: 'Scissors', emoji: '✌️' },
];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleClick = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computer);
    determineWinner(choice.name, computer.name);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a Draw!");
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Scissors' && computer === 'Paper') ||
      (user === 'Paper' && computer === 'Rock')
    ) {
      setResult('You Win! 🎉');
    } else {
      setResult('You Lose! 😞');
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>

      <div className="buttons">
        {choices.map((choice) => (
          <button
            key={choice.name}
            className="choice-button"
            onClick={() => handleClick(choice)}
          >
            <span className="emoji">{choice.emoji}</span>
            <span>{choice.name}</span>
          </button>
        ))}
      </div>

      <div className="result-card">
        <div className="choice-display">
          <h3>Your Choice</h3>
          <div className="choice-icon">
            {userChoice ? (
              <>
                <span className="emoji">{userChoice.emoji}</span>
                <span>{userChoice.name}</span>
              </>
            ) : (
              <span className="placeholder">-</span>
            )}
          </div>
        </div>

        <div className="choice-display">
          <h3>Computer's Choice</h3>
          <div className="choice-icon">
            {computerChoice ? (
              <>
                <span className="emoji">{computerChoice.emoji}</span>
                <span>{computerChoice.name}</span>
              </>
            ) : (
              <span className="placeholder">-</span>
            )}
          </div>
        </div>

        <h2 className={`result-text ${result.includes('Win') ? 'win' : result.includes('Lose') ? 'lose' : 'draw'}`}>
          {result || 'Make your move!'}
        </h2>

        <button className="reset-button" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default App;