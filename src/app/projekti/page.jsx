import React from 'react';
import Image from 'next/image';
import './page.scss';

import ServiceItem from '@/components/OurService/ServiceItem/ServiceItem';
import { projectsConst } from './projekti.const';
import ProjectItem from '@/components/ProjectItem/ProjectItem';
import Banner from '@/components/Banner/Banner';

export const metadata = {
    title: 'Stolarija Rodić | Projekti',
    description:
        'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
    keywords: 'Stolarija, PVC, Velux',
    alternates: {
        canonical: `https://www.stolarijarodic.com/projekti`,
    },
};

const page = () => {
    return (
        <section className="projects-page">
            <Banner title="Projekti" />
            <div className="container projects-page-wrapper">
                <div className="projects-items">
                    {projectsConst.map((project) => (
                        <ProjectItem key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default page;
