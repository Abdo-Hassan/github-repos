import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Repos from './components/Repos';
import Home from './components/Home';
import PrivateUserRoute from './components/PrivateUserRoute';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Github Public Repos</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateUserRoute exact path='/repos' component={Repos} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
