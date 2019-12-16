import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { store } from './redux/store';
import { loadUser } from './redux/actions/auth';

import Notification from './components/notification/notification';
import Homepage from './pages/Homepage/homepage';
import Dashboard from './pages/Dashboard/dashboard';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <ThemeProvider>
        <CSSReset />
        <Notification />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
