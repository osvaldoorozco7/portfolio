import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <section className='hero-container' id='home'>
      <div className='hero-content'>
        <h2>Hi, I'm Osvaldo.</h2>
        <h2>I'm a full stack developer.</h2>

      </div>

      <div className="hero-img">
        <div>
          <img className='imagen' src="./images/batman.png" alt="hero" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
