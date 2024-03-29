import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
  const { id } = useParams();
  const { authorizationToken } = useAuth();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const updateUserHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/user/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        toast.success("User Update Succesfully");
        getUserForEdit();
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUserForEdit();
  }, []);

  const getUserForEdit = async () => {
    const response = await fetch(`http://localhost:8080/api/admin/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });
    const data = await response.json();
    setUserData(data);
  };

  return (
    <section className="contectSection">
      <div className="wrapper">
        <h2>User Update</h2>
        <div className="formDetails">
          <form action="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={updateUserHandler}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={userData.email}
              onChange={updateUserHandler}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={updateUserHandler}
            />
            <input
              type="submit"
              value="UPDATE"
              id="submitBtn"
              onClick={updateUser}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminUpdate;
