import React from 'react';

import './styles.css';

import Main from './components/Main/Main';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
