import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-left">
      <h3>Make An Appointment</h3>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="contact-input w-100">
          <input type="text" id="name" name="name" placeholder="Your Name" />
          <label htmlFor="name"></label>
        </div>
        <div className="contact-input w-100">
          <input type="email" id="email" name="email" placeholder="Your Email" />
          <label htmlFor="email"></label>
        </div>
        <div className="contact-input w-100">
          <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Your Message"></textarea>
          <label htmlFor="comments"></label>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
