import React from "react";
import "../home/style/ContactSection.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, feel free to reach out via the form below!</p>

      <div className="contact-container">
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required placeholder="Subject" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required placeholder="Your Message"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ishan-sharma001" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;