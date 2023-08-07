import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './VeluxPageContent.scss';
import ContentTable from '../ContentTable/ContentTable';

const VeluxPageContent = ({ veluxUslugaContent, url }) => {
    const {
        img,
        pageTitle,
        subtitle,
        subtitleSecond,
        tableContent,
        sideNavigation,
        sideList,
        tableContentSecond,
        imageText,
        tableInfoList,
        tableInfoListSecond,
    } = veluxUslugaContent;
    return (
        <div className="container velux-service-wrapper">
            <div className="velux-service-header">
                <Image src={img} alt={pageTitle} width={300} height={300} className="velux-service-header-image" />
                <p className="velux-service-header-text">{imageText}</p>
            </div>
            <div className="velux-service-main">
                <div className="velux-service-content">
                    <h2 className="velux-service-item-subtitle">{subtitle}</h2>
                    {tableInfoList && (
                        <>
                            <ul className="velux-service-list">
                                {tableInfoList.map((item) => (
                                    <li key={item} className="velux-service-list-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {tableContent && <ContentTable tableContent={tableContentSecond} />}
                    {subtitleSecond && <h2 className="velux-service-item-subtitle">{subtitleSecond}</h2>}
                    {tableInfoListSecond && (
                        <>
                            <ul className="velux-service-list">
                                {tableInfoListSecond.map((item) => (
                                    <li key={item} className="velux-service-list-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {tableContentSecond && <ContentTable tableContent={tableContentSecond} />}
                </div>
                <aside className="service-page-sidebar">
                    <div className="service-page-side-navigation">
                        {sideNavigation.map((navItem) => (
                            <Link
                                key={navItem.title}
                                className={`side-nav-title ${url === navItem.url && 'active'}`}
                                href={navItem.url}
                            >
                                {navItem.title}
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default VeluxPageContent;
