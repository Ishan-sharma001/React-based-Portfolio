import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or any inquiries!</p>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>

      {/* Contact Info */}
      <div className="contact-info">
        <p>Email: <a href="mailto:ishansharma2511@gmail.com">ishansharma2511@gmail.com</a></p>
        <p>Phone: <a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a></p>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      {/* Google Map (Optional) */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
