import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from 'react-icons/rx';
import './LightBox.scss';

const LightBox = ({ img, closeLightbox }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClose = (e) => {
    if (e.target.id === 'background' || e.target.id === 'cross') closeLightbox('');
  };

  return mounted
    ? createPortal(
        <div id="background" className="background" onClick={handleClose}>
          <div className="image-container">
            <RxCross2 id="cross" className="cross" onClick={handleClose} />
            <Image src={img} alt="Uvecana slika iz galerije" className="lightbox-img" width={300} height={300} />
          </div>
        </div>,
        document.body
      )
    : null;
};

export default LightBox;
