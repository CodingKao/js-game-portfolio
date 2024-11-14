// pages/Game1.jsx
import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_in0ob0t', 'template_xsfj3gt', form.current, 'vJFPuweGb_rfTPAMt')
        
      e.target.reset()
    };

  return (
      <section id='contact'>
          <h2>Contact Me</h2>
          <div className="container contact__container">
              <div className="contact__options">
                  <article className="contact__option">
                      <MdOutlineEmail className='contact__option-icon'/>
                      <h4>Email</h4>
                      <h5>saelor.kao@gmail.com</h5>
                      <a href="mailto:saelor.kao@gmail.com" target="_blank_">Send a message</a>
                  </article>

                  <article className="contact__option">
                      <BsLinkedin />
                      <h4>LinkedIn</h4>
                      <h5>https://www.linkedin.com/in/kao-saelor/</h5>
                      <a href="https://www.linkedin.com/in/kao-saelor/" target="_blank_">Connect with me</a>
                  </article>

                  <article className="contact__option">
                      <BsGithub />
                      <h4>GitHub</h4>
                      <h5>https://github.com/CodingKao</h5>
                      <a href="https://github.com/CodingKao" target="_blank_">Follow my work</a>
                  </article> 

              </div>
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name='name' placeholder='Your Full Name' required></input>       
                  <input type="email" name='email' placeholder='Your Email' required></input>   
                  <textarea name="message" rows="15" placeholder="Your Message" required></textarea>          
                  <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>

          </div>
      </section>
  )
}

export default Contact