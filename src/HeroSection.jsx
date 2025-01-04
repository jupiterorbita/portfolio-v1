import React from 'react';
import './HeroSection.css';
import heroImageBlack from './assets/me-black.png';
import heroImageRed from './assets/me-red.png';

const HeroSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading">John Misirlakis</h1>
        <p>Finally  You Found Me!</p>

      </div>
      <div className="hero-image" role="img" aria-label="Hero illustration">
        <img
          src={heroImageRed}
          alt="floating amidst a constellation of code snippets and colorful browser windows, this handsome young dude is all about merging tech and human interactions"
          className="image-light"
          aria-label="Red themed image of a handsome young dude"
          title="Image of a handsome young dude in light mode"
        />
        <img
          src={heroImageBlack}
          alt="floating amidst a constellation of code snippets and colorful browser windows, this handsome young dude is all about merging tech and human interactions"
          className="image-dark"
          aria-label="Black themed image of a handsome young dude"
          title="Image of a handsome young dude in dark mode"
        />
      </div>
    </section>
  );
};

export default HeroSection;