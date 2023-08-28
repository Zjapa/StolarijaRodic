import React from 'react';
import Link from 'next/link';
import { navigationConfig } from '../Header/nav-const';
import { FOOTER_CONTACT_US, FOOTER_SITE_MAP_TITLE, contactItems } from './footer-const';
import Image from 'next/image';
import { Button } from '../Button/Button';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-wrapper">
                <section className="footer-section logo-section">
                    <Image
                        src="/images/svg/LogoWhite.svg"
                        width="200"
                        height="45"
                        alt="Stolarija Rodic Logo"
                        className="logo-footer"
                    />
                    <div className="logo-text">
                        <p>Kvalitetna i moderna stolarija u vašem domu. Vaši prozori su naša briga!</p>
                    </div>
                    <Button link="/kontakt" text="Kontakt" />
                </section>
                <section className="footer-section sitemap">
                    <h2 className="footer-section-title">{FOOTER_SITE_MAP_TITLE}</h2>
                    <div className="footer-section-items">
                        {navigationConfig.map((navLink) => (
                            <Link key={navLink.title} href={navLink.url}>
                                {navLink.title}
                            </Link>
                        ))}
                    </div>
                </section>
                <section className="footer-section">
                    <h2 className="footer-section-title">{FOOTER_CONTACT_US}</h2>
                    <div className="footer-section-items">
                        {contactItems.map((navLink) => (
                            <div key={navLink.desc} className="footer-section-item">
                                <Image src={navLink.icon} alt={navLink.alt} height={30} width={30} />
                                <p key={navLink.desc} href={navLink.url}>
                                    {navLink.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <hr className="footer-line" />
            <div className="container footer-bottom">
                <a href="tel:+38166208390">
                    &copy; {new Date().getFullYear()} <span className='copyright-text-decor'>Stolarija Rodić</span>
                </a>

                <a href="mailto:japax97@gmail.com">
                    Created by <span className='copyright-text-decor'>Pavle Prelić</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
