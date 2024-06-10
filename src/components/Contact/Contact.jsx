import React from 'react';
import ContactText from './ContactText';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const Contact = () => {
  return (
    <section id="section-contact">
      <ContactText />
      <div className="container contact-main ">
        <ContactForm />
        <ContactMap />
      </div>
    </section>
  );
};

export default Contact;
