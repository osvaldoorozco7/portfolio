import React from 'react';
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard.jsx/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container' id='contact'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div style={{flex: 1}}>
          <ContactInfoCard
          iconUrl={'./images/mail-icon.png'}
          text={'osvaldoorozcorod@gmail.es'}
          />
          <ContactInfoCard
          iconUrl={'./images/github-icon.png'}
          text={'https://github.com/osvaldoorozco7'}
          />
        </div>

        <div style={{flex: 1}}>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
