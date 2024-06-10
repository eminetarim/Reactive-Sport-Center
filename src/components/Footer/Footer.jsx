import React from 'react';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import '../../style.css';


const Footer = () => {
  return (
    <footer id="footer" className="d-flex justify-content-center text-white">
      <div className="container mb-5">
        <FooterInfo />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
