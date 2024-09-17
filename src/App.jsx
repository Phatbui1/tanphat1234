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
import User from './onboarding/User';
import Home from './onboarding/Home';
import Select from './onboarding/Select';
import Stacking from './onboarding/Stacking';
import Stacking1 from './onboarding/Stacking1';
import Ano from './onboarding/Ano';
import Team from './onboarding/Team';
import Team1 from './onboarding/Team1';
import Airdrop from './onboarding/Airdrop';
import Airdrop1 from './onboarding/Airdrop1';
import Verify from './onboarding/Verify';
import Page from './onboarding/Page';
import Page1 from './onboarding/Page1';
import Page2 from './onboarding/Page2';
import Page3 from './onboarding/Page3';
import Leader from './onboarding/Leader';
import Unity from './onboarding/Unity';
import Unity1 from './onboarding/Unity1';
import Support from './onboarding/Support';
import Support1 from './onboarding/Support1';
import Money from './onboarding/Money';
import Money1 from './onboarding/Money1';
import Money2 from './onboarding/Money2';
import User1 from './onboarding/User1';
import Deposit from './onboarding/Deposit';
import HIstory from './onboarding/HIstory';
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
        <Route path="/user1" element={<User1 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/money" element={<Money />} />
        <Route path="/select" element={<Select />} />
        <Route path="/stacking" element={<Stacking />} />
        <Route path="/stacking1" element={<Stacking1 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team1" element={<Team1 />} />
        <Route path="/page" element={<Page />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/unity" element={<Unity />} />
        <Route path="/unity1" element={<Unity1 />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support1" element={<Support1 />} />
        <Route path="/money1" element={<Money1 />} />
        <Route path="/money2" element={<Money2 />} />
        <Route path="/ano" element={<Ano />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/airdrop1" element={<Airdrop1 />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/history" element={<HIstory />} />
      </Routes>
    </Router>
  );
};

export default App;
