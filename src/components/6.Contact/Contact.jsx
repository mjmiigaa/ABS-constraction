import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFax,
  FaPhoneSquareAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ABS constract", // <-- EmailJS dashboard-с яг хуулж тавина
        "template_qupe2y7", // <-- EmailJS dashboard-с яг хуулж тавина
        form.current,
        "E4ZF8GRaqcIF4NGic"   // <-- EmailJS dashboard-с яг хуулж тавина
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("Your message has been sent successfully. Thank you!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left - Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-description">
            If you have any questions or inquiries, feel free to contact us
            using the form below.
          </p>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
          <p>{status}</p>
        </form>

        {/* Right - Contact Info */}
        <div className="contact-info">
          <h3>Company Information</h3>
          <p>
            <FaMapMarkerAlt /> <strong>Address:</strong> 123 Main Street, City,
            Country
          </p>
          <p>
            <FaPhoneSquareAlt /> <strong>Landline:</strong> +123-456-7890
          </p>
          <p>
            <FaPhoneAlt /> <strong>Mobile:</strong> +123-456-7891
          </p>
          <p>
            <FaFax /> <strong>Fax:</strong> +123-456-7892
          </p>
          <p>
            <FaEnvelope /> <strong>Email:</strong> contact@abscompany.com
          </p>
          <p>
            <strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;