import React from 'react';

const TrainerItem = ({ imgSrc, name, role }) => {
  return (
    <div className="trainer-box">
      <img className="trainer-img" src={imgSrc} alt={name} />
      <div className="trainer-info">
        <h6>{name}</h6>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TrainerItem;
