import React, { useState } from "react";
import loginFromImg from "../asset/images/loginFromImg.png";
import "../scss/pages/_register.scss";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const changeHandler = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    setRegisterForm({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
    console.log(registerForm);
  };

  return (
    <section className="registerSection">
      <div className="wrapper">
        <div className="imgContainer">
          <img src={loginFromImg} alt="" />
        </div>
        <div className="registerContent">
          <h2>Register Form</h2>
          <form action="">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={registerForm.username}
              onChange={changeHandler}
              autoComplete="off"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={registerForm.email}
              onChange={changeHandler}
              autoComplete="off"
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={registerForm.phone}
              onChange={changeHandler}
              autoComplete="off"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerForm.password}
              onChange={changeHandler}
              autoComplete="off"
            />
            <input
              type="submit"
              value="Register Now"
              id="submitBtn"
              onClick={formHandler}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
