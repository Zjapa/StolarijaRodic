import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/img/logo.png';
import { navigationConfig } from './nav-const';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header-nav">
          {/* <Image src={logo} width="100" height="40" alt="Stolarija Rodic Logo" /> */}
          <div className="nav-links">
            {navigationConfig.map((navLink) => (
              <Link key={navLink.title} href={navLink.url}>
                {navLink.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
