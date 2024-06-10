import React from 'react';
import PurchaseItem from './PurchaseItem';
import PurchaseText from './PurchaseText';
import '../../style.css';


const Purchase = () => {
  return (
    <section id="section-purchase">
      <PurchaseText />
      <div className="container">
        <div className="row row-cols-1 row-cols-ms-3 g-4">
          <PurchaseItem imgSrc="./public/img/purchase1.jpg" title="Kettlebell / 5kg" price="89,99" />
          <PurchaseItem imgSrc="./public/img/purchase2.jpg" title="Treadmill" price="99,99" />
          <PurchaseItem imgSrc="./public/img/purchase3.jpg" title="Adjustable Dumbbell" price="79,99" />
          <PurchaseItem imgSrc="./public/img/purchase4.jpg" title="Kettlebell / 3kg" price="59,99" />
        </div>
      </div>
    </section>
  );
};

export default Purchase;
