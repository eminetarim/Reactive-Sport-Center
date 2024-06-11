import React from 'react';
import PurchaseItem from './PurchaseItem';
import PurchaseText from './PurchaseText';
import purchase1 from "../../assets/img/purchase1.jpg";
import purchase2 from "../../assets/img/purchase2.jpg";
import purchase3 from "../../assets/img/purchase3.jpg";
import purchase4 from "../../assets/img/purchase4.jpg";

import '../../style.css';


const Purchase = () => {
  return (
    <section id="section-purchase">
      <PurchaseText />
      <div className="container">
        <div className="row row-cols-1 row-cols-ms-3 g-4">
          <PurchaseItem imgSrc={purchase1} title="Kettlebell / 5kg" price="89,99" />
          <PurchaseItem imgSrc={purchase2} title="Treadmill" price="99,99" />
          <PurchaseItem imgSrc={purchase3} title="Adjustable Dumbbell" price="79,99" />
          <PurchaseItem imgSrc={purchase4} title="Kettlebell / 3kg" price="59,99" />
        </div>
      </div>
    </section>
  );
};

export default Purchase;
