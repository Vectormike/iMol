import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// ---- Pages Imports ----

import Notification from '../components/notification/notification';
import Homepage from '../pages/Homepage/homepage';
import Dashboard from '../pages/Dashboard/dashboard2';

// ---- Route Definitions ----
const Routes = () => {
  return (
    <Fragment>
      <Notification />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
