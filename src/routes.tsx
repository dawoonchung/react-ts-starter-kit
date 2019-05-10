import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    <Route
      render={() => (
        <div>
          Nothing found!
        </div>
      )}
    />
  </Switch>
);

export default Routes;
