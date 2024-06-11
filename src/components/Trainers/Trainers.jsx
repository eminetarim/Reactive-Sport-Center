import React from 'react';
import TrainerItem from './TrainerItem';
import TrainersText from './TrainersText';
import trainer1 from '../../assets/img/trainer1.jpg';
import trainer2 from '../../assets/img/trainer2.jpg';
import trainer3 from '../../assets/img/trainer3.jpg';
import '../../style.css';


const Trainers = () => {
  return (
    <section id="section-trainer">
      <TrainersText />
      <div className="container">
        <div className="trainer">
          <TrainerItem imgSrc={trainer1} name="Jane Doe" role="Cardio Trainer" />
          <TrainerItem imgSrc={trainer2} name="John Doe" role="Yoga Trainer" />
          <TrainerItem imgSrc={trainer3} name="Alice Smith" role="Pilates Trainer" />
        </div>
      </div>
    </section>
  );
};

export default Trainers;
