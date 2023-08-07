import Link from 'next/link';
import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ dropdownItems }) => {
    return (
        <div className="dropdown">
            {dropdownItems.map((item) => (
                <Link key={item.title} rel="stylesheet" href={item.url} className="dropdown-title">
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default Dropdown;
