import React from 'react';
import ReviewItem from './ReviewItem';
import ReviewText from './ReviewText';
import client1 from "../../assets/img/client1.jpg";
import client2 from "../../assets/img/client2.jpg";
import '../../style.css';


const Review = () => {
  return (
    <section id="section-review">
      <ReviewText />
      <div className="container d-flex flex-wrap justify-content-between ">
        <ReviewItem imgSrc={client1} name="John Doe" role="Diet Expert" comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo iste. Ipsam alias aperiam facilis nobis voluptatibus dolores, expedita velit harum ratione, perferendis maiores doloribus accusantium illo ut laboriosam ab." />
        <ReviewItem imgSrc={client2} name="Jane Doe" role="Diet Expert" comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, explicabo iste. Ipsam alias aperiam facilis nobis voluptatibus dolores, expedita velit harum ratione, perferendis maiores doloribus accusantium illo ut laboriosam ab." />
      </div>
    </section>
  );
};

export default Review;
