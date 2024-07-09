import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Guild1 from './onboarding/Guild1';
import Splash from './onboarding/Splash';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/guild1" element={<Guild1 />} />
      </Routes>
    </Router>
  );
};

export default App;
