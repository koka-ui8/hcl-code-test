import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Continent from './Continent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Flag Picker</h3>
        <span>This app will help you to learn flags around the world in 3 steps</span>
        
      </header>
      <Continent />
    </div>
  );
}

export default App;
