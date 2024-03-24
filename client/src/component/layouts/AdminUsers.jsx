import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";

const AdminUsers = () => {
  const [allUserData, setAllUserData] = useState([]);
  const { authorizationToken } = useAuth();

  useEffect(() => {
    getAllUserData();
  }, []);

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setAllUserData(data);
      console.log(data);
    } catch (error) {
      console.log(`Admin Panel User Data : ${error}`);
    }
  };
  const deleteUserHandler = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/user/delete/${id}`,
        {
          method: "Delete",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return allUserData?.length === 0 ? (
    <div>Loading the Data</div>
  ) : (
    <section className="adminUser">
      <div className="wrapper">
        <div className="secHeading">
          <h2>Admin User Data</h2>
        </div>
        <div className="userTable">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUserData.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user?.username}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phone}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteUserHandler(user._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminUsers;
