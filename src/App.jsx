import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Guild1 from './onboarding/Guild1';
import Splash from './onboarding/Splash';
import Guild2 from './onboarding/Guild2';
import Guild3 from './onboarding/Guild3';
import Login from './onboarding/Login';
import Guild4 from './onboarding/Guild4';
import Guild5 from './onboarding/Guild5';
import Releas from './onboarding/Releas';
import User from './onboarding/User'
import Home from './onboarding/Home';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Splash />} />
    //     <Route path="/guild1" element={<Guild1 />} />
    //     <Route path="/guild2" element={<Guild2 />} />
    //     <Route path="/guild3" element={<Guild3 />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/reset-password" element={<Guild4 />} />
    //     <Route path="/guild5" element={<Guild5 />} />
    //     <Route path="/release" element={<Releas />} />
    //     <Route path="/user" element ={<User/>}/>
    //   </Routes>
    // </Router>
    <div>
      <Home/>
    </div>
  );
};

export default App;
