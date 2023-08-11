import { contactItems } from '@/components/Footer/footer-const';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/Button/Button';
import './page.scss';
import Banner from '@/components/Banner/Banner';

export const metadata = {
    title: 'Stolarija Rodić | Kontakt',
    description:
        'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
    keywords: 'Stolarija, PVC, Velux',
    alternates: {
        canonical: `https://www.stolarijarodic.com/kontakt`,
    },
};

const page = () => {
    return (
        <section className="contact-page">
            <Banner title="Kontakt" />
            <div className="container contact-page-wrapper">
                <div className=" contact-page-main">
                    <form action="" className="contact-form">
                        <div className="form-first-row">
                            <input type="text" placeholder="Ime" name="firstName" />
                            <input type="email" placeholder="Email" name="email" />
                        </div>
                        <textarea name="Poruka" placeholder="Poruka"></textarea>
                        <Button text="Pošalji" />
                    </form>
                    <div className="contact-info">
                        {contactItems.map((navLink) => (
                            <div key={navLink.desc} className="contact-section-item">
                                <Image src={navLink.icon} alt={navLink.alt} height={30} width={30} />
                                <p key={navLink.desc} href={navLink.url}>
                                    {navLink.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.705899606157!2d20.4009998!3d44.8332475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6598f81aaaab%3A0xce2af9140ab6bf45!2sStolarija%20Rodi%C4%87!5e0!3m2!1ssr!2srs!4v1691349972607!5m2!1ssr!2srs"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="map"
                ></iframe>
            </div>
        </section>
    );
};

export default page;
