// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import from free-solid-svg-icons
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lcc0vop', 'template_izqr5qr', e.target, 'uCQmfSpbfNla0k9LZ')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setIsError(true);
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
        {isSent && <p className="success-message">Your message has been sent successfully!</p>}
        {isError && <p className="error-message">Oops! Something went wrong. Please try again.</p>}
      </form>
      <h2 aria-hidden="true"></h2>

      <div className="social-links">
        
        <a href="mailto:joshualee12@vt.edu" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/12joshuaslee/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/12joshuaslee" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
