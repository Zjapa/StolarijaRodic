import React from 'react';
import './Banner.scss'

const Banner = ({title}) => {
    return (
        <div className='banner'>
            <div className="container banner-wrapper">
                <h1 className='banner-title'>{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
  