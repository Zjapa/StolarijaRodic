'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Carousel.scss';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
    }, [images]);

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    const imageContainerStyle = {
        position: 'relative',
        width: '400%',
        height: '100%',
        left: `-${currentImageIndex * 100}%`,
        display: 'flex',
        transition: `left 1s ease`,
    };

    useEffect(() => {
        const interval = setInterval(() => handleNext(), 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="carousel">
            <BsChevronLeft id="left" className="slider-arrow-left" onClick={handlePrevious} />
            <div style={imageContainerStyle}>
                {images.map((image, index) => (
                    <img key={image.id} src={images[index]?.src} alt={`Carousel image ${index}`} />
                ))}
            </div>

            <div className="indicator">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
            <BsChevronRight id="right" className="slider-arrow-right" onClick={handleNext} />
        </section>
    );
};

export default Carousel;
