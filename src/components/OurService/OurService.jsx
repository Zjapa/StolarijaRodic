import React from 'react';
import './OurService.scss';
import { NASE_USLUGE } from './OurServices-const';

const OurService = () => {
  return (
    <section className="our-service">
      <div className="container our-service-wrapper">
        <h1 className="our-service-title">{NASE_USLUGE}</h1>
        <div className="our-services-items"></div>
      </div>
    </section>
  );
};

export default OurService;
