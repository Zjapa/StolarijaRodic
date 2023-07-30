'use client';

import Dropdown from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import dropdownIcon from '@/img/svg/dropdown-arrow.svg';
import './NavTab.scss';

const NavTab = ({ title, url, dropdown }) => {
    const [isClicked, setIsClicked] = useState(false);
    const tabRef = useRef();
    const showDropdown = dropdown?.length && isClicked;

    useEffect(() => {
        const handleDropdown = (e) => {
          if(!tabRef.current.contains(e.target))
            setIsClicked(false);
        };
        document.addEventListener('mousedown', handleDropdown);

        return () => document.removeEventListener('mousedown', handleDropdown);
    });

   

    return (
        <div ref={tabRef} className="nav-tab" onClick={() => setIsClicked(!isClicked)}>
            <div className="title-icon">
                <Link href={url} className="dropdown-title">
                    {title}
                </Link>
                {dropdown?.length && (
                    <Image
                        src={dropdownIcon}
                        alt="Icon for dropdown"
                        height={15}
                        width={15}
                        className={`dropdown-icon ${isClicked ? 'clicked' : null}`}
                    />
                )}
            </div>

            {showDropdown && <Dropdown dropdownItems={dropdown} />}
        </div>
    );
};

export default NavTab;
