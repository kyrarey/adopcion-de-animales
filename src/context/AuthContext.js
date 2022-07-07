import { useState, useEffect, createContext } from "react";
import find from "../hooks/find";

//estado inicial para el contexto
const authContextInitialState = {
  loggedUser: null,
  isAuthenticated: false,
  toggleAuth: () => null,
  favsUser: [],
  listFavs: () => null,
};

export const AuthContext = createContext(authContextInitialState);

// componente provider
const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState({
    loggedUser: null,
    isAuthenticated: false,
    favsUser: [],
  });

  const toggleAuth = (user, pets) =>
    setLoggedIn({
      loggedUser: user,
      isAuthenticated: !loggedIn.isAuthenticated,
      favsUser: pets,
    });

    useEffect(() => {
      const userStorage = JSON.parse(localStorage.getItem("newUser"));
      if(userStorage) {
        find(`/favorite/${userStorage._id}`)
        .then(animals => setLoggedIn({ loggedUser: userStorage, isAuthenticated: true, favsUser: animals }))
      } else {
        setLoggedIn({ loggedUser: null, isAuthenticated: false, favsUser: [] })
      }
    }, []);

  return (
    <AuthContext.Provider value={{ ...loggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;