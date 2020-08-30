import React from 'react';

import './styles.css';

import Main from './pages/main';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
