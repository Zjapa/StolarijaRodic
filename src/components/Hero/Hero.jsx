import React from 'react';
import Image from 'next/image';
import HeroImage from '@/img/modern-window-building.png';
import { HERO_CONTENT_DESC, HERO_CONTENT_TITLE } from './hero-const.js';
import { Button } from '../Button/Button.jsx';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">{HERO_CONTENT_TITLE}</h1>
          <p className="hero-desc">{HERO_CONTENT_DESC}</p>
          <Button link="/projekti" text="Saznaj više" />
        </div>
        {/* <Image src={HeroImage} priority width="700" alt="Moderna pvc stolarija" className="hero-image" /> */}
      </div>
    </section>
  );
};

export default Hero;
