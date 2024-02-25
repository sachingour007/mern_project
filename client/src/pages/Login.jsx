import React, { useState } from "react";
import loginFromImg from "../asset/images/loginFromImg.png";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setLoginForm({
      email: "",
      password: "",
    });
    console.log(loginForm);
  };

  return (
    <section className="loginSection registerSection">
      <div className="wrapper">
        <div className="imgContainer">
          <img src={loginFromImg} alt="" />
        </div>
        <div className="registerContent">
          <h2>Login Form</h2>
          <form action="">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={loginForm.email}
              onChange={changeHandler}
              autoComplete="off"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={changeHandler}
              autoComplete="off"
            />
            <input
              type="submit"
              value="Login"
              id="submitBtn"
              onClick={loginHandler}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
