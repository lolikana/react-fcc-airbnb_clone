import React from 'react';
import HeroGroupImgs from './../../images/Group 77.png';
// import HeroImgs from './HeroImgs';

const Hero = () => {
  return (
    <section className="section-hero">
      {/* <HeroImgs /> */}
      <img
        src={HeroGroupImgs}
        alt="Hero Group Images"
        className="hero--img-2"
      />
      <div className='hero--legend'>
        <h1 className="hero--legend-header">Online Experiences</h1>
        <p className="hero--legend-text">
          join unique interactive activitties led by one-of-kind host- all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
