import React from 'react';

import './styles.css';

import Navbar from './components/navbar';
import Routes from './router';
import { ResultsProvider } from './context/results-context';

function App() {
  return (
    <div className="App">
      <ResultsProvider>
        <Navbar />
        <Routes />
      </ResultsProvider>
    </div>
  );
}

export default App;
