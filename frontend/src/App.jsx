import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProfile } from './store/ducks/profile';
import Navbar from './components/Navbar';
import Appbar from './components/Appbar';
import Profile from './pages/Profile';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Modal from './components/Modal';
import LoaderPage from './components/LoaderPage';

function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.profile.error);
  const isLoading = useSelector((state) => state.profile.isLoading);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Appbar />
      {error && <Modal>{error}</Modal>}
      {isLoading ? (
        <LoaderPage />
      ) : (
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/certifications" component={Certifications} />
          <Redirect to="/" />
        </Switch>
      )}
    </Router>
  );
}

export default App;
