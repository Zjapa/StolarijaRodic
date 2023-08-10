import Link from 'next/link';
import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ dropdownItems, showDropdown, handleToggleMenu }) => {
    return (
        <div className={`dropdown  ${showDropdown ? 'toggle' : ''}`}>
            {dropdownItems?.map((item) => (
                <Link
                    key={item.title}
                    rel="stylesheet"
                    href={item.url}
                    className="dropdown-title"
                    onClick={handleToggleMenu}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default Dropdown;
