import React from 'react';
import BoxItem from './BoxItem';
import '../../style.css';

const BoxSection = () => {
  return (
    <section id="section-box">
      <div className="container">
        <div className="row">
          <BoxItem num="325" text="Course" />
          <BoxItem num="405" text="Work Out" />
          <BoxItem num="305" text="Working Hour" />
          <BoxItem num="705" text="Happy Client" />
        </div>
      </div>
    </section>
  );
};

export default BoxSection;
