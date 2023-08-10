import React from 'react';
import { usluge } from './usluge-const';
import { veluxUsluge } from './velux-const';
import Link from 'next/link';
import VeluxPageContent from '@/components/VeluxPageContent/VeluxPageContent';
import Image from 'next/image';
import { titles } from './generateTItle.const';
import { notFound } from 'next/navigation';
import './page.scss';
import Banner from '@/components/Banner/Banner';

import { ImageList, ImageListItem } from '@mui/material';
import { camovoDrvoPhotos } from './photos';
import Gallery from '@/components/Gallery/Gallery';

export const generateMetadata = ({ params }) => {
    return {
        title: `Stolarija Rodić | ${titles[params.usluga]}`,
        description:
            'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
        keywords: 'Stolarija, PVC, Velux',
        alternates: {
            canonical: `https://www.stolarijarodic.com/${params.usluga}`,
        },
    };
};

export function generateStaticParams() {
    return [
        { usluga: 'camovo-drvo' },
        { usluga: 'drvo-aluminijum' },
        { usluga: 'drveni-kapak' },
        { usluga: 'ulazna-vrata-puno-drvo' },
        { usluga: 'medijapan-folija' },
        { usluga: 'medijapan-farbani' },
        { usluga: 'medijapan-furnirani' },
        { usluga: 'unutrasnja-vrata-puno-drvo' },
        { usluga: 'velux-ovlasceni-prodavac' },
        { usluga: 'velux-standard-drvo' },
        { usluga: 'velux-standard-beli' },
        { usluga: 'velux-standard-plus-drvo' },
        { usluga: 'velux-standard-plus-beli' },
        { usluga: 'velux-zastita-svetlost' },
        { usluga: 'velux-zastita-toplota' },
    ];
}

const page = ({ params }) => {
    const { usluga: url } = params;
    const pageTitle = titles[url];
    const uslugaContent = usluge[url]; //DRVENA STOLARIJA, UNUTRASNJA VRATA
    const veluxUslugaContent = veluxUsluge[url]; //VELUX KROVNI PROZORI

    if (!pageTitle) notFound();

    return (
        <section className="service-page-item">
            <Banner title={pageTitle} />
            {/* <h1 className="service-page-item-title">{pageTitle}</h1> */}
            {uslugaContent && (
                <>
                    <div className="container service-page-item-wrapper">
                        <div className="service-page-content">
                            {/* <Image
                            src={uslugaContent.img}
                            alt={uslugaContent.pageTitle}
                            className="service-page-item-image"
                            height={350}
                            width={350}
                        /> */}
                            <h3 className="service-page-item-subtitle">{uslugaContent.title}</h3>
                            {uslugaContent.text.map((textItem) => (
                                <p key={textItem} className="desc-text">
                                    {textItem}
                                </p>
                            ))}
                            {uslugaContent.contentList && (
                                <>
                                    {uslugaContent.titleSecond && (
                                        <h4 className="service-page-item-subtitleSecond">
                                            {uslugaContent.titleSecond}
                                        </h4>
                                    )}
                                    <ul className="service-page-list">
                                        {uslugaContent.contentList.map((item) => (
                                            <li key={item} className="service-page-list-item">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <aside className="service-page-sidebar">
                            <div className="service-page-side-navigation">
                                {uslugaContent.sideNavigation.map((navItem) => (
                                    <Link
                                        key={navItem.title}
                                        className={`side-nav-title ${url === navItem.url && 'active'}`}
                                        href={navItem.url}
                                        as={navItem.url}
                                    >
                                        {navItem.title}
                                    </Link>
                                ))}
                            </div>
                            <ul className="service-page-sidebar-list">
                                {uslugaContent.sideList?.map((item) => (
                                    <li key={item} className="service-page-sidebar-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                    <div className="gallery-container">
                        <Gallery photos={camovoDrvoPhotos} />
                    </div>
                </>
            )}

            {veluxUslugaContent && <VeluxPageContent veluxUslugaContent={veluxUslugaContent} url={url} />}
        </section>
    );
};

export default page;
