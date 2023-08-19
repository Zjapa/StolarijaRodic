'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { navigationConfig } from './nav-const';
import HeaderTop from './HeaderTop/HeaderTop';
import NavTab from './NavTab/NavTab';
import './Header.scss';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prevToggle) => !prevToggle);
  };
  return (
    <header>
      <HeaderTop />
      <div className="header-bottom">
        <div className=" header-bottom-container">
          <Image src="/images/svg/Logo.svg" width="200" height="45" alt="Stolarija Rodic Logo" className="logo" />
          <nav className={`nav-links  ${toggleMenu ? 'toggle' : ''}`}>
            {navigationConfig.map((navLink) => (
              <NavTab
                key={navLink.title}
                dropdown={navLink.dropdown}
                url={navLink.url}
                title={navLink.title}
                handleToggleMenu={handleToggleMenu}
              />
            ))}
          </nav>
          <div className="menu" onClick={handleToggleMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
