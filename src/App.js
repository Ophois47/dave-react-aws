import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dave's first AWS application connecting
        </p>
        <p>
          a ReactJS app, and its corresponding Git Repository. Yay!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dominate React
        </a>
      </header>
    </div>
  );
}

export default App;
