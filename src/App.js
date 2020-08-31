import React from 'react';

import './styles.css';

import Navbar from './components/navbar';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
