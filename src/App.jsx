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
import Select from './onboarding/Select';
import Stacking from './onboarding/Stacking';
import Stacking1 from './onboarding/Stacking1';
import Ano from './onboarding/Ano';
import Team from './onboarding/Team';
import Team1 from './onboarding/Team1'
import Airdrop from './onboarding/Airdrop';
import Airdrop1 from './onboarding/Airdrop1';
import Verify from './onboarding/Verify';
import Page from './onboarding/Page';
import Page1 from './onboarding/Page1';
import Page2 from './onboarding/Page2';
import Page3 from './onboarding/Page3'
import Leader from './onboarding/Leader';
import Unity from './onboarding/Unity';
import Unity1 from './onboarding/Unity1';
import Support from './onboarding/Support';
import Support1 from './onboarding/Support1';
import User1 from './onboarding/User1';
import Money1 from './onboarding/Money1';
import Money from './onboarding/Money';
import Money2 from './onboarding/Money2';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/guild1" element={<Guild1 />} />
        <Route path="/guild2" element={<Guild2 />} />
        <Route path="/guild3" element={<Guild3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<Guild4 />} />
        <Route path="/guild5" element={<Guild5 />} />
        <Route path="/release" element={<Releas />} />
        <Route path="/user" element={<User />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Money' element={<Money />} />
        <Route path='/select' element={<Select />} />
        <Route path='/Stacking' element={<Stacking />} />
        <Route path='/Stacking1' element={<Stacking1 />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/Team1' element={<Team1 />} />
        <Route path='/Page' element={<Page />} />
      </Routes>
    </Router>
    //<div>
    // <Page1/>
    //</div>
  );
};

export default App;
