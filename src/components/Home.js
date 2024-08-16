import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import logo from '../assets/logo.png';
import flag1 from '../assets/flag1.png'; 
import flag2 from '../assets/flag2.png';
import flag3 from '../assets/flag3.png';
import flag4 from '../assets/flag4.png';
import flag5 from '../assets/flag5.png';
import flag6 from '../assets/flag6.png';
import flag7 from '../assets/flag7.png';
import flag8 from '../assets/flag8.png';
import flag9 from '../assets/flag9.png';
import flag10 from '../assets/flag10.png';

function Home() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/game');
  };

  const handleLanguageMode = () => {
    navigate('/languageguessr');
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="home-title">CountryGuessr</div>
      <div className="scrolling-flags-container">
        <div className="scrolling-flags">
          <img src={flag1} alt="Flag 1" />
          <img src={flag2} alt="Flag 2" />
          <img src={flag3} alt="Flag 3" />
          <img src={flag4} alt="Flag 4" />
          <img src={flag5} alt="Flag 5" />
          <img src={flag6} alt="Flag 6" />
          <img src={flag7} alt="Flag 7" />
          <img src={flag8} alt="Flag 8" />
          <img src={flag9} alt="Flag 9" />
          <img src={flag10} alt="Flag 10" />
          <img src={flag1} alt="Flag 1" />
          <img src={flag2} alt="Flag 2" />
          <img src={flag3} alt="Flag 3" />
          <img src={flag4} alt="Flag 4" />
          <img src={flag5} alt="Flag 5" />
          <img src={flag6} alt="Flag 6" />
          <img src={flag7} alt="Flag 7" />
          <img src={flag8} alt="Flag 8" />
          <img src={flag9} alt="Flag 9" />
          <img src={flag10} alt="Flag 10" />
        </div>
      </div>
      <div className="button-container">
        <button className="start-game-button" onClick={handleStartGame}>Classic Mode</button>
        <button className="start-game-button" onClick={handleLanguageMode}>Language Mode</button>
      </div>
    </div>
  );
}

export default Home;
