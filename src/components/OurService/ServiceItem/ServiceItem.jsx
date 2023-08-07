import Image from 'next/image';
import React from 'react';
import './ServiceItem.scss';
import { Button } from '@/components/Button/Button';

const ServiceItem = ({ service }) => {
    const { title, img, desc,url } = service;

    return (
        <article className="service-item">
            <Image src={img} alt={title} className="item-image" />

            <div className="item-content">
                <h3 className="item-title">{title}</h3>
                <p className="item-desc">{desc}</p>
                <Button link={url} text="Saznaj više" inverted />
            </div>
        </article>
    );
};

export default ServiceItem;
