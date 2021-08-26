import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import Notes from './components/Notes/Notes';
import Signin from './components/Signin';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/notes" component={Notes} />
      </Switch>
    </Router>
  );
}

export default App;
