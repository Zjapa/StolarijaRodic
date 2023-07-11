import Link from 'next/link';
import React from 'react';
import './Button.scss';

export const Button = ({ link, inverted, size, text }) => {
    return (
        <Link href={link}>
            <button className={`button ${size} ${inverted ? 'inverted' : null}`} role="button">
                {text}
            </button>
        </Link>
    );
};
