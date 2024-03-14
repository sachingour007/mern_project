import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { json } from "react-router-dom";

const Contact = () => {
  const { user } = useAuth();
  const [contactData, setContactData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContactData({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const contactHandler = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    contactFormData();
    console.log(contactData);
    setContactData({
      username: "",
      email: "",
      message: "",
    });
  };

  const contactFormData = async () => {
    const res = await fetch("http://localhost:8080/api/form/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    if (res.ok) {
      const contact_data = await res.json();
      console.log(contact_data);
    }
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
