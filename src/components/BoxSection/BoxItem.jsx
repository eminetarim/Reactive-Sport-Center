import React from 'react';

const BoxItem = ({ num, text }) => {
  return (
    <div className="col-md-3">
      <div className="box">
        <p className="num">{num}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BoxItem;
