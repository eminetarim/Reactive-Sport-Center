import React from 'react';
import HeroButtonGroup from './HeroButtonGroup';
import HeroText from './HeroText';
import '../../style.css';

const Hero = () => {
  return (
    <section id="section-hero">
      <div className="container">
        <HeroText />
        <HeroButtonGroup />
      </div>
    </section>
  );
};

export default Hero;
