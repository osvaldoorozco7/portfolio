import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Skills from './components/Skills/Skills.jsx';
import WorkExperience from './components/WorkExperience/WorkExperience.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <AboutMe/>
        <Skills/>
        <WorkExperience/>
        <ContactMe/>
        <Footer/>
      </div>
      </>
    </div>
  );
}

export default App;
