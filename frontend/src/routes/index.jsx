import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from '../views/Feed';
import Login from '../views/Login';
import Signup from '../views/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/feed" component={Feed} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;