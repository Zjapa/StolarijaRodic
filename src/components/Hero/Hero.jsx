import Image from 'next/image';
import React from 'react';
import HeroImage from '@/img/modern-window-building.png';
import { HERO_CONTENT_DESC, HERO_CONTENT_TITLE } from './const.js';
import './Hero.scss';
import { Button } from '../Button/Button.jsx';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">{HERO_CONTENT_TITLE}</h1>
        <p className="hero-desc">{HERO_CONTENT_DESC}</p>
        <Button link="/projekti" text="Saznaj više" />
      </div>
      <Image src={HeroImage} priority width="700" alt="Moderna pvc stolarija" />
    </section>
  );
};

export default Hero;
