import React, { useEffect } from "react";
import "../scss/main.scss";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {

  },[isLoggedIn])
  return (
    <>
      <header>
        <div className="headerWrapper">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <nav className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
