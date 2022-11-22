import React from 'react'
import './Contact.css'
import {SiGmail}from 'react-icons/si'
import {BsMessenger}from 'react-icons/bs'
import {BsWhatsapp}from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zd9zlfs', 'template_8tpbp7u', form.current, '_0U2QCHmrV7a7rRVD')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'  >
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
          <SiGmail contact_option-icon/>
          <h4>Email</h4>
          <h5>clintonfaze</h5>
          <a href="mailto:clintonfaze@gmail.com">Send a Message</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp contact_option-icon/>
          <h4>WhatsApp</h4>
          <h5>08120212639</h5>
          <a href="https://api.whatsapp.com/send?phone=08120212639">Chat me Up</a>
        </article>
        <article className="contact_option">
          <BsMessenger contact_option-icon />
          <h4>Messenger</h4>
          <h5>clintonfaze</h5>
          <a href="https://m.me/clintonfaze">Chat me Up</a>
        </article>
        </div>
        {/* EDN OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="text" name="email" id="" placeholder='Your Email' required/>
          <textarea name="message" id=""  rows="7" placeholder='Enter your message here' required> </textarea>
          <button type='submit' name='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section  >
  )
}

export default Contact 