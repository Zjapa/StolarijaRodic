import React from 'react';
import { HERO_CONTENT_DESC, HERO_CONTENT_TITLE } from './hero-const.js';
import { Button } from '../Button/Button.jsx';
import './Hero.scss';
import CarouselSlider from '../Carousel/Carousel.jsx';
import { images } from '../Carousel/carousel-const.js';
import Carousel from '../Carousel/Carousel.jsx';

const Hero = () => {
    return (
        <section className="hero">
            <Carousel images={images} />
            <div className="hero-content">
                <h1 className="hero-title">{HERO_CONTENT_TITLE}</h1>
                <p className="hero-desc">{HERO_CONTENT_DESC}</p>
                <Button link="/projekti" text="Saznaj više" />
            </div>
        </section>
    );
};

export default Hero;
