import Image from 'next/image';
import React from 'react';
import './ProjectItem.scss';

const ProjectItem = ({ project }) => {
    const { title, img, desc } = project;

    return (
        <article className="project-item">
            <Image src={img} alt={title} className="item-image" height={300} width={300}/>

            <div className="item-content">
                <h3 className="item-title">{title}</h3>
                <p className="item-desc">{desc}</p>
            </div>
        </article>
    );
};

export default ProjectItem;
