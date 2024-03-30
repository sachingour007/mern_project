import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [allContact, setAllContact] = useState([]);
  useEffect(() => {
    getAllContact();
  }, []);

  const getAllContact = async () => {
    const response = await fetch(`http://localhost:8080/api/admin/contacts`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });
    const data = await response.json();
    console.log(data);
    setAllContact(data);
  };
  const contactDelete = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/admin/contact/delete/${id}`,
      {
        method: "Delete",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      toast.success("Contact Delete Succesfully");
      getAllContact();
    } else {
      toast.error("Contact Delete unSuccesfully");
    }
  };

  return (
    <>
      <div className="adminContent">
        <div className="wrapper">
          {allContact.map(({ username, message, email, _id }) => {
            return (
              <div className="card" key={_id}>
                <h2>{username}</h2>
                <h3>{email}</h3>
                <p>{message}</p>
                <button onClick={() => contactDelete(_id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminContacts;
