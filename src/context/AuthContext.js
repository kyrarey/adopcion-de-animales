import { useState, createContext } from "react";
import { useEffect } from "react";


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
      isAuthenticated: !loggedIn.isAuthenticated,
    });

    useEffect(() => {
      const userStorage = JSON.parse(localStorage.getItem("newUser"));
      userStorage
        ? setLoggedIn({ loggedUser: userStorage, isAuthenticated: true })
        : setLoggedIn({ loggedUser: null, isAuthenticated: false });
    }, []);

  return (
    <AuthContext.Provider value={{ ...loggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;