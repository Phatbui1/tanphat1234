import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Splash from './onboarding/register/Splash';
import Guild1 from './onboarding/register/Guild1';
import Guild2 from './onboarding/register/Guild2';
import Guild3 from './onboarding/register/Guild3';
import Login from './onboarding/register/Login';
import Guild4 from './onboarding/register/Guild4';
import Guild5 from './onboarding/register/Guild5';
import Releas from './onboarding/register/Releas'; // Ensure the import is correct
import User from './onboarding/user/User';
import Home from './onboarding/home/Home';
import Select from './onboarding/rate/Select';
import Stacking from './onboarding/rate/Stacking';
import Stacking1 from './onboarding/rate/Stacking1';
import Ano from './onboarding/Data/Ano';
import Team from './onboarding/home/Team';
import Team1 from './onboarding/home/Team1';
import Airdrop from './onboarding/Data/Airdrop';
import Airdrop1 from './onboarding/Data/Airdrop1';
import Verify from './onboarding/user/Verify';
import Page from './onboarding/trendup/Page';
import Page1 from './onboarding/Data/Page1';
import Page2 from './onboarding/Data/Page2';
import Page3 from './onboarding/Data/Page3';
import Leader from './onboarding/home/Leader';
import Unity from './onboarding/home/Unity';
import Unity1 from './onboarding/Data/Unity1';
import Support from './onboarding/Data/Support';
import Support1 from './onboarding/Data/Support1';
import Money from './onboarding/wallet/Money';
import Money1 from './onboarding/Data/Money1';
import Money2 from './onboarding/wallet/Money2';
import User1 from './onboarding/user/User1';
import Deposit from './onboarding/wallet/Deposit';
import HIstory from './onboarding/wallet/HIstory';

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
        <Route path="/releas" element={<Releas />} /> {/* Correct path here */}
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
