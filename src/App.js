import React from 'react';

import './App.scss';
import Home from './container/Home/Home';
import { Navbar } from './components'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
