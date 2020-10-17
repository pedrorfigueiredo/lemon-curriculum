import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/skills" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Profile} />
        <Route path="/certifications" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
