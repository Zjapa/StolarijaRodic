import React from 'react';
import { IZABERTIE_NAS, chooseUsItems } from './chooseUs-const';
import Image from 'next/image';
import './ChooseUs.scss';

const ChooseUs = () => {
    return (
        <section className='choose-us'>
            <div className="container choose-us-wrapper">
                <h1 className="choose-us-title">{IZABERTIE_NAS}</h1>
                <div className="choose-us-items">
                    {chooseUsItems.map((item) => (
                        <div key={item.title} className='choose-item'>
                            <Image src={item.icon} alt={item.title} height={40} />
                            <div className="choose-item-content">
                                <h4 className="choose-item-title">{item.title}</h4>
                                <p className="choose-item-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
