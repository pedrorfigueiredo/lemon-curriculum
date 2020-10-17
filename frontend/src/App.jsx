import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/education" component={Profile} />
        <Route path="/skills" component={Profile} />
        <Route path="/certifications" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
