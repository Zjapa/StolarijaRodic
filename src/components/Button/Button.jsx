import Link from 'next/link';
import React from 'react';

export const Button = ({ link, inverted, text }) => {
  return (
    <Link href={link}>
      <button className={`button ${inverted ? 'inverted' : null}`} role="button">
        {text}
      </button>
    </Link>
  );
};
