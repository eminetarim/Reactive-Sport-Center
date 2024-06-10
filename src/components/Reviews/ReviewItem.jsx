import React from 'react';

const ReviewItem = ({ imgSrc, name, role, comment }) => {
  return (
    <div className="review-box">
      <div className="d-flex mb-2">
        <img className="rounded-circle" src={imgSrc} alt={name} />
        <div>
          <h6>{name}</h6>
          <p>{role}</p>
        </div>
      </div>
      <div className="box-clip">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
