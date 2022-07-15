import { useState, useEffect, createContext } from "react";
import find from "../hooks/find";

//estado inicial para el contexto
const authContextInitialState = {
  loggedUser: null,
  isAuthenticated: false,
  toggleAuth: () => null,
};

export const AuthContext = createContext(authContextInitialState);

// componente provider
const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState({
    loggedUser: null,
    isAuthenticated: false,
  });

  const toggleAuth = (user) =>
    setLoggedIn({
      loggedUser: user,
      isAuthenticated: true,
    });

  const toggleAuthOut = () =>
    setLoggedIn({
      loggedUser: null,
      isAuthenticated: false,
    });

  useEffect(() => {
      const userStorage = JSON.parse(localStorage.getItem("newUser"));
      if(userStorage) {
        find(`/favorite/${userStorage._id}`)
        .then(animals => setLoggedIn({ loggedUser: userStorage, isAuthenticated: true }))
      } else {
        setLoggedIn({ loggedUser: null, isAuthenticated: false })
      }
    }, []);

  return (
    <AuthContext.Provider value={{ ...loggedIn, toggleAuth, toggleAuthOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;