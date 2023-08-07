import Image from 'next/image';
import { pvcContent } from './pvc-stolarija.const';
import './page.scss';

export const metadata = {
    title: 'Stolarija Rodić | PVC Stolarija',
    description:
        'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
    keywords: 'Stolarija, PVC, Velux',
};

const Page = () => {
    return (
        <section className="pvc-page">
            <h1 className="pvc-page-title">Pvc stolarija</h1>

            <div className="container pvc-page-wrapper">
                <div className="pvc-page-content">
                    {pvcContent.map((pvcItem) => (
                        <article key={pvcItem.imgAlt} className="pvc-item">
                            <Image src={pvcItem.img} alt={pvcItem.imgAlt} className="pvc-page-item-image" />
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
