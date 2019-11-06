// FW React
import React from 'react';

// Asset & CSS
import logo from './assets/logo';
import './App.css';

// Router
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
