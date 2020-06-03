import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path="/tickets/:departmentId" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
