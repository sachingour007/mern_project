import React, { useState } from "react";
import loginFromImg from "../asset/images/loginFromImg.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const storeTokenInLS = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginn();
    setLoginForm({
      email: "",
      password: "",
    });
    console.log(loginForm);
  };

  const loginn = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });
      console.log(res);
      if (res.ok) {
        alert("login Succesfully");
        const res_data = await res.json();
        storeTokenInLS(res_data.token);
        navigate("/");
      } else {
        alert("Data not match");
      }
    } catch (err) {
      console.log("login", err);
    }
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
