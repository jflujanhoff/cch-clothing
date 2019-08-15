import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
