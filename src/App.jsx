import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BoxSection from './components/BoxSection/BoxSection';
import Classes from './components/Classes/Classes';
import Trainers from './components/Trainers/Trainers';
import Purchase from './components/Purchase/Purchase';
import Review from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  
  return (
    <div>
      <Header />
      <Hero />
      <BoxSection />
      <Classes />
      <Trainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
