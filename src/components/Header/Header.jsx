import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/img/logo.png';
import { navigationConfig } from './nav-const';
import './Header.scss';
import HeaderTop from './HeaderTop/HeaderTop';
import NavTab from './NavTab/NavTab';

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <div className="header-bottom">
        <div className="container">
          <nav className="header-nav">
            {/* <Image src={logo} width="100" height="40" alt="Stolarija Rodic Logo" /> */}
            <nav className="nav-links">
              {navigationConfig.map((navLink) => (
                <NavTab key={navLink.title} dropdown={navLink.dropdown} url={navLink.url} title={navLink.title} />
              ))}
            </nav>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
