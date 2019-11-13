import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Notification from './components/notification/notification';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className='App'>
        <Notification />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
