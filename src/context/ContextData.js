import { createContext, useState, useEffect } from "react";
import { loginData } from "../auth/LoginData";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [theam, setTheam] = useState("Dark Mode");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleTheam = () => {
    setTheam((prev) =>
      prev === "Dark Mode" ? "Light Mode" : "Dark Mode"
    );
  };

  const login = (email, password) => {
    const userAdmin = loginData.find(
      (item) =>
        item.email === email &&
        item.password.toString() === password
    );

    if (userAdmin) {
      localStorage.setItem("user", JSON.stringify(userAdmin));
      setUser(userAdmin);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <userContext.Provider
      value={{
        theam,
        handleTheam,
        user,
        login,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};