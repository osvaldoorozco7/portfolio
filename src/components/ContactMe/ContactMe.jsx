import React from 'react';
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard.jsx/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {

  const showMessage = () => {
    alert('Email copied!')
  }


    const copyMail = () => {
      const mail = "osvaldoorozcorod@gmail.es";
      navigator.clipboard.writeText(mail)
      .then( () => {
        showMessage();
      })
      .catch((error) => {
        console.error('ocurrió un error:', error);
      });
    }

  return (
    <section className='contact-container' id='contact'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div style={{flex: 1}}>
          <div onClick={copyMail}>
          <ContactInfoCard
          iconUrl={'./images/mail-icon.png'}
          text={'osvaldoorozcorod@gmail.es'}
          />
          </div>
          <ContactInfoCard
          iconUrl={'./images/github-icon.png'}
          text={'https://github.com/osvaldoorozco7'}
          url={'https://github.com/osvaldoorozco7'}
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
