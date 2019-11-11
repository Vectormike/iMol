import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className='App'>
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
