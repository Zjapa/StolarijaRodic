'use client';

import { Button } from '@/components/Button/Button';
import Image from 'next/image';
import './not-found.scss';

export default function ErrorNotFound() {
  

    return (
        <section className="error-page">
            <div className="container error-page-wrapper">
                <Image
                    src="/images/modern-window-building.webp"
                    alt="error slika"
                    className="service-page-item-image"
                    height={300}
                    width={300}
                />
                <h1 className="error-404">404</h1>
                <h4 className="error-404-desc">
                    Žao nam je, stranica koju ste tražili ne postoji na našoj web stranici
                </h4>
                <Button link="/" text="Vrati se na početnu stranu" />
            </div>
        </section>
    );
}
