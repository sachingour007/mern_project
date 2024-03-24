import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setTonken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [serviceData, setServiceData] = useState(null);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setTonken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  const logoutUser = () => {
    setTonken("");
    return localStorage.removeItem("token");
  };

  //Jwt Authentication => to get the currently loggedin user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (err) {
      console.log("error fetchin user data");
    }
  };

  const getServiceData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/data/service");
      const data = await response.json();
      setServiceData(data.msg);
    } catch (error) {
      console.log(`service data not get`, error);
    }
  };

  useEffect(() => {
    userAuthentication();
    getServiceData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        logoutUser,
        isLoggedIn,
        user,
        serviceData,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
