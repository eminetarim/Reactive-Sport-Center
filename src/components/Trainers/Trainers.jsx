import React from 'react';
import TrainerItem from './TrainerItem';
import TrainersText from './TrainersText';
import '../../style.css';


const Trainers = () => {
  return (
    <section id="section-trainer">
      <TrainersText />
      <div className="container">
        <div className="trainer">
          <TrainerItem imgSrc="./public/img/trainer1.jpg" name="Jane Doe" role="Cardio Trainer" />
          <TrainerItem imgSrc="./public/img/trainer2.jpg" name="John Doe" role="Yoga Trainer" />
          <TrainerItem imgSrc="./public/img/trainer3.jpg" name="Alice Smith" role="Pilates Trainer" />
        </div>
      </div>
    </section>
  );
};

export default Trainers;
