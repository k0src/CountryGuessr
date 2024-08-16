import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import RoundEnd from './components/RoundEnd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/round-end" element={<RoundEnd correctCountry="null" points={0} />} />
      </Routes>
    </Router>
  );
}

export default App;
