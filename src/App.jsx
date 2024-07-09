import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Splash from './onboarding/Splash';
import Guild1 from './onboarding/Guild1';

const App = () => {
  return (
<BrowserRouter>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/guild1" component={Guild1} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
