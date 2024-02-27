import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  

  return (
    <section className="contectSection">
      <div className="wrapper">
        <h2>Contact Us</h2>
        <div className="formDetails">
          <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
