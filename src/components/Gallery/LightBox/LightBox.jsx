import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import './LightBox.scss';
import { createPortal } from 'react-dom';

const LightBox = ({ img }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return mounted
        ? createPortal(
              <div id='background' className="background" onClick={(e) => console.log(e.target.id)}>
                  <div className="image-container">
                      <Image src={img} alt="Uvecana slika iz galerije" className="lightbox-img" width={300} height={300}/>
                  </div>
              </div>,
              document.body
          )
        : null;
};

export default LightBox;
