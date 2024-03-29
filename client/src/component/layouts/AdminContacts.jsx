import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

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

  return <div>AdminContacts</div>;
};

export default AdminContacts;
