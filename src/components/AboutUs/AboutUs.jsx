import React from 'react';
import { O_STOLARIJI, O_STOLARIJI_DESC, O_STOLARIJI_DESC_SECOND, O_STOLARIJI_PODNASLOV } from './AboutUs-const';
import Image from 'next/image';
import './AboutUs.scss';
import WindowScetchImg from '@/img/modern-window-building.jpg';
import { Button } from '../Button/Button';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container about-us-wrapper">
        <h1 className="about-us-title">{O_STOLARIJI}</h1>
        <div className="about-us-content">
          <div className="about-us-text">
            <h2 className="about-us-subtitle">{O_STOLARIJI_PODNASLOV}</h2>
            <p className="about-us-desc">{O_STOLARIJI_DESC}</p>
            <p className="about-us-desc">{O_STOLARIJI_DESC_SECOND}</p>
            <Button link="/usluge/unutrasnja-vrata" text="Saznaj više" />
          </div>
          <div className="about-us-image">
            <Image src={WindowScetchImg} className="about-us-image" alt="O nama pocetna prozor skica" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
