import React, { useState } from 'react';
import ClassesButtonGroup from './ClassesButtonGroup';
import ClassesText from './ClassesText';
import '../../style.css';

const Classes = () => {
  const [activeClass, setActiveClass] = useState('yoga');

  return (
    <section id="our-classes">
      <div className="container d-flex flex-column justify-content-center align-items-center text-black text-center">
      <h2>OUR CLASSES</h2>
      <div className="orange-box"></div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit., sit amet
        consectetur adipisicing elit., sit amet consectetur adipisicing elit.
        Sapiente veniam tempora, ratione quos eligendi debitis hic iste
        perspiciatis ullam? Repellat.
      </p>
      
    </div>
      <ClassesButtonGroup setActiveClass={setActiveClass} />
      <ClassesText activeClass={activeClass} />
    </section>
  );
};

export default Classes;
