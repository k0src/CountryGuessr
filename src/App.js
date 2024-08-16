import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import LanguageGuessr from './components/LanguageGuessr';
import RoundEnd from './components/RoundEnd';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/LanguageGuessr" element={<LanguageGuessr />} />
        <Route path="/round-end" element={<RoundEnd correctCountry="null" points={0} />} />
      </Routes>
    </Router>
  );
}

export default App;
