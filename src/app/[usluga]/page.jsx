import Banner from '@/components/Banner/Banner';
import React from 'react';
import { usluge } from './usluge-const';

const page = ({ params }) => {
    const { usluga } = params;
    const { title, img, text, sideList } = usluge[usluga];
    return (
        <section className='service-page-item'>
            <Banner title={title} />
            <div className="container service-page-item-wrapper">
                <div className="service-page-item-top"></div>
                <div className="service-page-item-text"></div>
            </div>
        </section>
    );
};

export default page;
