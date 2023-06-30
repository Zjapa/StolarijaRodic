import React from 'react';
import './Header.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header-nav">
          <div className="logo">Logo</div>
          <div className="nav-links">
            <Link href="/">Početna</Link>
            <Link href="/">Početna</Link>
            <Link href="/">Početna</Link>
            <Link href="/">Početna</Link>
            <Link href="/">Početna</Link>
            <Link href="/">Početna</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
