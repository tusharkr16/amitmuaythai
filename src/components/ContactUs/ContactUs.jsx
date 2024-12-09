import React from "react";
import "./contactus.css";
import contactUsImage from "../../assets/Images/contactUs-Image.jpg";

const ContactUs = () => {
  return (
    <div>
      <section className="contact">
        <div className="contact-form">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            We are now available to take your orders. Conect with us via phone:
            9811042020 or email: bharatl.singh543@gmail.com
          </p>
          <form action="">
            <input type="text" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              id=""
              placeholder="E-mail"
              required
            />
            <input type="" placeholder="Write a subject" required />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" name="" value="Submit" class="btn" />
          </form>
        </div>

        <div>
          <img src={contactUsImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
