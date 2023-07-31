import Banner from '@/components/Banner/Banner';
import Image from 'next/image';
import React from 'react';
import pvcImg from '@/img/pvc-windows-drawing.png';
import pvcImg2 from '@/img/pvc-windows-drawing2.png';
import {
  STOLARIJA_RODIC,
  STOLARIJA_RODIC_DESC,
  STOLARIJA_RODIC_DESC_2,
  STOLARIJA_RODIC_DESC_3,
  STOLARIJA_RODIC_DESC_4,
  STOLARIJA_RODIC_DESC_5,
} from './o-nama.const';
import './page.scss';

export const metadata = {
  title: 'Stolarija Rodić | O nama',
  description:
    'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
  keywords: 'Stolarija, PVC, Velux',
};

const page = () => {
  return (
    <section className="about-us-page">
      <Banner title="O nama" />
      <div className="container about-us-page-wrapper">
        <div className="image-container">
          <Image className="about-us-page-img" src={pvcImg} alt="O nama pvc u izgradnji" />
          <Image className="about-us-page-img-bottom" src={pvcImg2} alt="O nama pvc stolarija u izgradnji" />
          {/* <Image className="about-us-page-img-last" src={pvcImg2} alt="O nama pvc stolarija u izgradnji" /> */}
        </div>
        <div className="about-us-page-content">
          <h2 className="about-us-page-title">{STOLARIJA_RODIC}</h2>
          <p className="about-us-page-desc">{STOLARIJA_RODIC_DESC}</p>
          <p className="about-us-page-desc">{STOLARIJA_RODIC_DESC_2}</p>
          <p className="about-us-page-desc">{STOLARIJA_RODIC_DESC_3}</p>
          <p className="about-us-page-desc">{STOLARIJA_RODIC_DESC_4}</p>
          <p className="about-us-page-desc">{STOLARIJA_RODIC_DESC_5}</p>
        </div>
      </div>
    </section>
  );
};

export default page;
