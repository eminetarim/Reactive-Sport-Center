import React from 'react';

const FooterLinks = () => {
  return (
    <div className="footer-link d-flex flex-row justify-content-evenly">
      <div className="info-links">
        <div className="d-flex flex-column gap-2">
          <h4>Information</h4>
          <a href="#">About Us</a>
          <a href="#">Classes</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="helpful-links">
        <div className="d-flex flex-column gap-2">
          <h4>Helpful Links</h4>
          <a href="#">Services</a>
          <a href="#">Supports</a>
          <a href="#">Term & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
