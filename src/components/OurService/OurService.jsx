import React from 'react';
import './OurService.scss';
import { NASE_USLUGE } from './OurServices-const';
import { serviceItems } from './OurServices-const';
import ServiceItem from './ServiceItem/ServiceItem';

const OurService = () => {
    return (
        <section className="our-service">
            <div className="container our-service-wrapper">
                <h1 className="our-service-title">{NASE_USLUGE}</h1>
                <div className="our-service-items">
                    {serviceItems.map((service) => (
                        <ServiceItem key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurService;
