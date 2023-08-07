import React from 'react';
import Image from 'next/image';
import './page.scss';

import ServiceItem from '@/components/OurService/ServiceItem/ServiceItem';
import { projectsConst } from './projekti.const';
import ProjectItem from '@/components/ProjectItem/ProjectItem';

export const metadata = {
    title: 'Stolarija Rodić | Projekti',
    description:
        'Stolarija Rodić se bavi proizvodnjom i prodajom drvene,drvo-aluminijum,PVC i aluminijumske stolarije. Ovlašćeni smo distributer VELUX krovnih prozora.',
    keywords: 'Stolarija, PVC, Velux',
};

const page = () => {
    return (
        <section className="projects-page">
            <div className="container projects-page-wrapper">
                <h1 className="projects-page-title">Projekti</h1>
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
