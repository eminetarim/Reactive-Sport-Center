import React from 'react';

const PurchaseItem = ({ imgSrc, title, price }) => {
  return (
    <div className="col-12 col-sm-3">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><span>{price}</span>$ / 59,99$</p>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <span><i className="bi bi-cart3"></i></span>
          <p className="card-text mb-0">Add To Cart</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;
