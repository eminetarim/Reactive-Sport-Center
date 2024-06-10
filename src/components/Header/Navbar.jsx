import React from 'react';
import '../../style.css';


const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#our-classes">Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section-trainer">Trainer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section-review">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section-contact">Contact</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-orange">JOIN US</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
