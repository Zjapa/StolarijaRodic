import React from 'react';
import Image from 'next/image';
import { headerTopItems } from './top-header-const';
import './HeaderTop.scss';
import { CiFacebook, CiInstagram } from 'react-icons/ci';

const HeaderTop = () => {
    return (
        <section className="header-top">
            <div className="header-top-container">
                <div className="header-top-items">
                    {headerTopItems.map((item) => (
                        <div key={item.title} className="header-item">
                            <Image src={item.icon} alt={item.title} height={30} width={30} />
                            <div className="item-content">
                                <h4 className="item-title">{item.title}</h4>
                                <p className="item-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="social-icons">
                        <a href="https://www.facebook.com/stolarijarodic">
                            <CiFacebook className="fb-icon" />
                        </a>
                        <a href="https://www.instagram.com/stolarija_rodic">
                            <CiInstagram className="ig-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderTop;
