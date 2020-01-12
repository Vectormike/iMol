import React, { Fragment, useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { store } from '../redux/store';
import { loadUser } from '../redux/actions/auth';

import Routes from '../routes/index';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <ThemeProvider>
        <CSSReset />
        <Routes />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
