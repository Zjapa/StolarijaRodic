import React from 'react';
import Image from 'next/image';
import { headerTopItems } from './top-header-const';
import './HeaderTop.scss';

const HeaderTop = () => {
  return (
    <section className="header-top">
      <div className="container">
        <div className="header-top-items">
          {headerTopItems.map((item) => (
            <div key={item.title} className="header-item">
              <Image src={item.icon} alt={item.title} height={30}  width={30}/>
              <div className="item-content">
                <h4 className="item-title">{item.title}</h4>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
