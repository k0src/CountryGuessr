import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/RoundEnd.css';

function RoundEnd() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalScore, timeElapsed } = location.state;

  useEffect(() => {
    if (totalScore > 4500) {
      const script = document.createElement('script');
      script.src = `${process.env.PUBLIC_URL}/confetti.js`;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [totalScore]);

  const getMessage = () => {
    if (totalScore === 6000) {
      return 'Perfect Game!';
    } else if (totalScore > 4500) {
      return 'Nice job!';
    } else {
      return 'Game Over!';
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handlePlayAgain = () => {
    navigate('/game');
  };

  return (
    <div className="round-end-container">
      <div className="round-end-message">{getMessage()}</div>
      <div className="final-score">Your total score: {totalScore}</div>
      <div className="final-time">Time: {formatTime(timeElapsed)}</div>
      <button className="play-again-button" onClick={handlePlayAgain}>Play Again</button>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default RoundEnd;
