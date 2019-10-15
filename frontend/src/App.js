import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const onClick = async () => {
    const response = await fetch(`${process.env.REACT_APP_ServiceEndpoint}/myfunction`);
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={onClick}>API call</button>
      </header>
    </div>
  );
}

export default App;
