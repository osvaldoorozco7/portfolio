import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Building the future</h2>
        <p>
          Passionate full stack developer | Transforming ideas into seamless
          and visually stunning web solutions
        </p>
      </div>

      <div className="hero-img">
        <div>

          <div className="tech-icon">
            <img src="./images/react-logo.png" alt="react_logo" />
          </div>

          <img className='imagen' src="./images/vengeance.jpg" alt="hero" />
        </div>

        <div>
          <div className="tech-icon">
            <img src=".\images\html-logo.svg" alt="html-logo" />
          </div>

          <div className="tech-icon">
            <img  src=".\images\css-logo.svg" alt="css-logo" />
          </div>

          <div className="tech-icon">
            <img src=".\images\javascript-logo.svg" alt="javascript" />
          </div>

          <div className="tech-icon">
            <img src=".\images\java-logo.svg" alt="java-logo" />
          </div>

          <div className="tech-icon">
            <img src=".\images\spring-logo.svg" alt="spring-logo" />
          </div>

          <div className="tech-icon">
            <img src=".\images\bootstrap-logo.svg" alt="bootstrap-logo" />
          </div>

          <div className="tech-icon">
            <img src=".\images\git-logo.svg" alt="git-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
