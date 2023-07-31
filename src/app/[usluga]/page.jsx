import Banner from '@/components/Banner/Banner';
import React from 'react';
import { usluge } from './usluge-const';
import Image from 'next/image';
import './page.scss';

const page = ({ params }) => {
  const { usluga } = params;
  const { pageTitle, img, imgSecond, text, title, titleSecond, sideList } = usluge[usluga];
  return (
    <section className="service-page-item">
      <Banner title={pageTitle} />
      {/* <span className="sidebar">
        {sideList.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </span> */}
      <div className="container service-page-item-wrapper">
        <div className="service-page-item-top">
          <Image src={img} alt={pageTitle} className="service-page-item-image" />
          <div className="text-container">
            <h2 className="service-page-item-subtitle">{title}</h2>
            <p className="desc-text">{text[0]}</p>
            <p className="desc-text">{text[1]}</p>
          </div>
        </div>
        <div className="service-page-item-top">
          <div className="text-container">
            <h2 className="service-page-item-subtitle">{titleSecond}</h2>
            <p className="desc-text">{text[2]}</p>
            <div className="sidebar">
              {sideList.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <Image src={imgSecond} alt={pageTitle} className="service-page-item-image" />
        </div>
        <div className="service-page-item-text"></div>
      </div>
    </section>
  );
};

export default page;
