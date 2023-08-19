import React from 'react';
import './Slide.scss';

const Slide = ({ imgSrc }) => {
    return (
        <div className="slide">
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default Slide;
