import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="container">
        <Hero/>
      </div>
      </>
    </div>
  );
}

export default App;
