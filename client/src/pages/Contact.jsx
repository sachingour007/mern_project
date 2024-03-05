import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const contactHandler = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    console.log(contactData);
    setContactData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contectSection">
        <div className="wrapper">
          <h2>Contact Us</h2>
          <div className="formDetails">
            <form action="">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={contactData.username}
                onChange={contactHandler}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={contactData.email}
                onChange={contactHandler}
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                value={contactData.message}
                onChange={contactHandler}
              ></textarea>
              <input
                type="submit"
                value="Submit"
                id="submitBtn"
                onClick={contactSubmit}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
