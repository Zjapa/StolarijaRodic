import React from 'react';
import { Button } from '@/components/Button/Button';
import './page.scss';

export const metadata = {
    title: 'Stolarija Rodić | Blog',
    description:
        'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
    keywords: 'Stolarija, PVC, Velux, Rodić, Drvo, Staklo, Vrata',
    alternates: {
        canonical: `https://www.stolarijarodic.com/blog`,
    },
};

const page = () => {
    return (
        <section className="blog-page">
            <div className="container blog-page-wrapper">
                <h1 className="blog-title">Stranica je trenutno u izradi</h1>
                <h4 className="blog-desc">Žao nam je, stranica koju ste tražili je trenutno u izradi</h4>
                <Button link="/" text="Vrati se na početnu stranu" />
            </div>
        </section>
    );
};

export default page;
