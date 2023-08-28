import Image from 'next/image';
import { pvcContent } from './pvc-stolarija.const';
import './page.scss';
import Banner from '@/components/Banner/Banner';

export const metadata = {
    title: 'Stolarija Rodić | PVC Stolarija',
    description:
        'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
    keywords: 'Stolarija, PVC, Velux, Rodić, Drvo, Staklo, Vrata',
    alternates: {
        canonical: `https://www.stolarijarodic.com/pvc-stolarija`,
    },
};

const Page = () => {
    return (
        <section className="pvc-page">
            <Banner title="Pvc stolarija" />

            <div className="container pvc-page-wrapper">
                <div className="pvc-page-content">
                    {pvcContent.map((pvcItem) => (
                        <article key={pvcItem.imgAlt} className="pvc-item">
                            <Image
                                src={pvcItem.img}
                                alt={pvcItem.imgAlt}
                                className="pvc-page-item-image"
                                width={250}
                                height={300}
                            />
                            <div className="text-container">
                                <h3 className="pvc-page-item-title">{pvcItem.title}</h3>
                                <p className="desc-text">{pvcItem.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;
