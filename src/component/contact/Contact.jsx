import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7b4cqkd",
        "template_z8kromi",
        form.current,
        "U1VW9hHl1v4BSAQGe"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been send",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
  };
  return (
    <section id="contact" className="contact-section">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container_contact">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>mbem.ilham@gmail.com</h5>
            <a href="mailto:mbem.ilham@gmail.com">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+6282217972629</h5>
            <a href="https://api.whatsapp.com/send?phone=6282217972629">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
