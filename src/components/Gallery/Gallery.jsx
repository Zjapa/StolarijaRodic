'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import './Gallery.scss';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import LightBox from './LightBox/LightBox';

const Gallery = ({ photos }) => {
  const [lightBoxImage, setLightBoxImage] = useState('');
  const [imgWidth, setImageWidth] = useState(0);

  const carouselRef = useRef();
  const imgRef = useRef();

  const handleNav = (arrow) => {
    carouselRef.current.scrollLeft += arrow === 'left' ? -imgWidth : imgWidth;
  };

  const handleOpenLightbox = (img) => {
    setLightBoxImage(img);
  };

  useEffect(() => {
    setImageWidth(imgRef.current.clientWidth + 14);
  }, [imgRef]);

  return (
    <div className="wrapper">
      <FaAngleLeft id="left" className="icon-left" onClick={() => handleNav('left')} />
      <div ref={carouselRef} className="carousel">
        {photos.map((photo) => (
          <Image
            ref={imgRef}
            key={photo.title}
            src={photo.img}
            alt={photo.title}
            width={300}
            height={300}
            className="gallery-img"
            onClick={() => handleOpenLightbox(photo.img)}
          />
        ))}
      </div>
      <FaAngleRight id="right" className="icon-right" onClick={handleNav} />
      {lightBoxImage && <LightBox img={lightBoxImage} closeLightbox={handleOpenLightbox} />}
    </div>
  );
};

export default Gallery;
