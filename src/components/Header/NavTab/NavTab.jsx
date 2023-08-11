'use client';

import Dropdown from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import './NavTab.scss';

const NavTab = ({ title, url, dropdown, handleToggleMenu }) => {
    const [isDropdownClicked, setIsDropdownClicked] = useState(false);
    const tabRef = useRef();
    const isDropdown = dropdown?.length;
    const showDropdown = isDropdown && isDropdownClicked;

    const handleDropdown = () => {
        setIsDropdownClicked(prevClicked => !prevClicked);
    };

    const navTitle = isDropdown ? (
        <p href={url} className="nav-title">
            {title}
        </p>
    ) : (
        <Link href={url} className="nav-title" onClick={() => handleToggleMenu(false)}>
            {title}
        </Link>
    );

    //Handle closing dropdown on outside click
    useEffect(() => {
        const handleOutsideDropdown = (e) => {
            if (!tabRef.current.contains(e.target)) setIsDropdownClicked(false);
        };
        document.addEventListener('mousedown', handleOutsideDropdown);

        return () => document.removeEventListener('mousedown', handleOutsideDropdown);
    });

    return (
        <div ref={tabRef} className="nav-tab" onClick={handleDropdown}>
            <div className="title-icon">
                {navTitle}
                {isDropdown && (
                    <Image
                        src="/images/svg/dropdown-arrow.svg"
                        alt="Icon for dropdown"
                        height={10}
                        width={15}
                        className={`dropdown-icon ${isDropdownClicked ? 'clicked' : ''}`}
                    />
                )}
            </div>
            <Dropdown dropdownItems={dropdown} showDropdown={showDropdown} handleToggleMenu={handleToggleMenu} />
        </div>
    );
};

export default NavTab;
