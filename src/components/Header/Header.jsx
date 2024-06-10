import { useEffect } from 'react';
import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import '../../style.css';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <label htmlFor="menu-btn" className="menu-icon"><i className="bi bi-list"></i></label>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
