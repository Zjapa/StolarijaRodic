import React from 'react';
import Link from 'next/link';
import { navigationConfig } from '../Header/nav-const';
import { FOOTER_CONTACT_US, FOOTER_SITE_MAP_TITLE, contactItems } from './footer-const';
import Image from 'next/image';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-wrapper">
                <section className="footer-section">
                    <Image src="/images/logo.png" width="100" height="40" alt="Stolarija Rodic Logo" className="logo-footer" />
                    {/* <Button link="/kontakt" text="Kontakt" /> */}
                </section>
                <section className="footer-section">
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
        </footer>
    );
};

export default Footer;
