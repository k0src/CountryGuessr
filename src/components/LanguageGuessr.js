import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Game.css'; 
import languages from './languageData'; 
import logo from '../assets/logo.png';

function LanguageGuessr() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [guess, setGuess] = useState('');
  const [correctGuessMessage, setCorrectGuessMessage] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [pointsPool, setPointsPool] = useState(1000);
  const [usedLanguages, setUsedLanguages] = useState([]);
  const [hintVisible, setHintVisible] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    selectNewLanguage();
    setPointsPool(1000);
    setHintVisible(false);
  }, [round]);

  useEffect(() => {
    if (correctGuessMessage) {
      const timeout = setTimeout(() => {
        setCorrectGuessMessage('');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [correctGuessMessage]);

  const selectNewLanguage = () => {
    let newLanguage;
    do {
      newLanguage = languages[Math.floor(Math.random() * languages.length)];
    } while (usedLanguages.includes(newLanguage.country));

    setCurrentLanguage(newLanguage);
    setUsedLanguages((prevUsedLanguages) => [...prevUsedLanguages, newLanguage.country]);
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === currentLanguage.country.toLowerCase()) {
      setCorrectGuessMessage(`Correct guess: ${currentLanguage.country}`);
      const pointsEarned = Math.max(pointsPool, 0);

      setScore((prevScore) => prevScore + pointsEarned);

      if (round < 5) {
        setRound(round + 1);
        setGuess('');
      } else {
        navigate('/round-end', { state: { totalScore: score + pointsEarned, timeElapsed } });
      }
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      const newPointsPool = pointsPool - 150;

      if (newPointsPool <= 0) {
        setPointsPool(0);
        setCorrectGuessMessage(`The correct answer was: ${currentLanguage.country}`);
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

  const revealHint = () => {
    setHintVisible(true);
    setPointsPool(pointsPool - 100);
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
      <Link to="/">
        <img src={logo} alt="Country Guessr Logo" className="logo" />
      </Link>
      <h2>Round {round}/5</h2>
      <audio controls src={currentLanguage.audio} className="audio-control"></audio>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your guess..."
        className="guess-input"
      />
        <button onClick={handleGuess}>Submit Guess</button>
      <p className="score">Score: {score}</p>
      <p className="time">Time: {formatTime(timeElapsed)}</p>
      {correctGuessMessage && (
        <p className="correct-guess-message">{correctGuessMessage}</p>
      )}
    </div>
  );
}

export default LanguageGuessr;
