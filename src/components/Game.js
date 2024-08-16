import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Game.css';
import countries from './countryData';

function Game() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0); 
  const [currentCountry, setCurrentCountry] = useState(countries[0]);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [correctGuessMessage, setCorrectGuessMessage] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [pointsPool, setPointsPool] = useState(1000);
  const [usedCountries, setUsedCountries] = useState([]);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    selectNewCountry();
    setCurrentHintIndex(0);
    setPointsPool(1000);
  }, [round]);

  useEffect(() => {
    if (correctGuessMessage) {
      const timeout = setTimeout(() => {
        setCorrectGuessMessage('');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [correctGuessMessage]);

  const selectNewCountry = () => {
    let newCountry;
    do {
      newCountry = countries[Math.floor(Math.random() * countries.length)];
    } while (usedCountries.includes(newCountry.name));

    setCurrentCountry(newCountry);
    setUsedCountries((prevUsedCountries) => [...prevUsedCountries, newCountry.name]);
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === currentCountry.name.toLowerCase()) {
      setCorrectGuessMessage(`Correct guess: ${currentCountry.name}`);
      const pointsEarned = Math.max(pointsPool, 0);

      setScore((prevScore) => prevScore + pointsEarned);

      if (round < 5) {
        setRound(round + 1);
        setGuess('');
      } else {
        navigate('/round-end', { state: { totalScore: score + pointsEarned, timeElapsed } });
      }
    } else {
      setShake(true); // Trigger shake effect
      setTimeout(() => setShake(false), 500); // Remove shake effect after animation ends
      const newPointsPool = pointsPool - 150;

      if (newPointsPool <= 0) {
        setPointsPool(0);
        setCorrectGuessMessage(`The correct answer was: ${currentCountry.name}`);
        if (round < 5) {
          setRound(round + 1);
          setGuess('');
        } else {
          navigate('/round-end', { state: { totalScore: score, timeElapsed } });
        }
      } else {
        setPointsPool(newPointsPool);
      }
    }
  };

  const revealNextHint = () => {
    if (currentHintIndex < currentCountry.hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1);
      setPointsPool(pointsPool - 100);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className={`game-container ${shake ? 'shake' : ''}`}>
      <h2>Round {round}/5</h2>
      <div className="hints-container">
        {currentCountry.hints.map((hint, index) => (
          <div
            key={index}
            className={`hint-box ${index <= currentHintIndex ? 'visible' : ''} hint-color-${index}`}
          >
            {hint}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your guess..."
        className="guess-input"
      />
      <div className="button-container">
        <button onClick={handleGuess}>Submit Guess</button>
        <button onClick={revealNextHint}>Reveal Hint</button>
      </div>
      <p className="score">Score: {score}</p>
      <p className="time">Time: {formatTime(timeElapsed)}</p>
      {correctGuessMessage && (
        <p className="correct-guess-message">{correctGuessMessage}</p>
      )}
    </div>
  );
}

export default Game;
