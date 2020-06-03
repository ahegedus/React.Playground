import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss';

const OptionA = (props) => (
  <div>
    <h1>Option A</h1>
  </div>
);
const OptionB = (props) => (
  <div>
    <h1>Option B</h1>
  </div>
);
const OptionC = (props) => (
  <div>
    <h1>Option C</h1>
  </div>
);

function HomePage({ match }) {
    return (
      <div className='homepage'>
        <Switch>
          <Route path={`${match.path}/active`} component={OptionA} />
          <Route path={`${match.path}/closed`} component={OptionB} />
          <Route path={`${match.path}/reports`} component={OptionC} />
        </Switch>
        <h1>Welcome to my Homepage</h1>
        <Directory />
      </div>
  );
}

export default HomePage;
