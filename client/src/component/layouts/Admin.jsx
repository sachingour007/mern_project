import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";

const Admin = () => {
  return (
    <section>
      <header className="adminHeader">
        <div className="headerWrapper">
          <nav className="menu">
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser  color="#402dde"/> users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts"><MdOutlineMessage color="#402dde"/> contacts</NavLink>
              </li>
              {/* <li>
                <NavLink to="/admin/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/admin/home">Home</NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </section>
  );
};

export default Admin;
