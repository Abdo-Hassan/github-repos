import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Repos from './components/Repos';
import PrivateUserRoute from './components/PrivateUserRoute';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav class='navbar navbar-light bg-dark'>
          <span class='navbar-brand mb-0 h1'>Github Public Repos</span>
        </nav>
        <Switch>
          <PrivateUserRoute exact path='/' component={Repos} />
          <Route exact path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
