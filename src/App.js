import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Repos from './components/Repos';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Github Public Repos</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/repos' component={Repos} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
