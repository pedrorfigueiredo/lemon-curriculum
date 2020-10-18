import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Appbar from './components/Appbar';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Certifications from './pages/Certifications';

function App() {
  return (
    <Router>
      <Navbar />
      <Appbar />
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/certifications" component={Certifications} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
