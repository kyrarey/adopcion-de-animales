import { useState, useEffect, createContext } from "react";
import find from "../hooks/find";


//estado inicial para el contexto
const favContextInitialState = {
  favPets: [],
  getFavs: () => null,
};

export const FavContext = createContext(favContextInitialState);

// componente provider
const FavContextProvider = ({ children }) => {
  const [favPetsUser, setFavPetsUser] = useState({
    favPets: []
  });
  
  const getFavs = pets => setFavPetsUser({
    favPets: pets,
  });

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("newUser"));
    if(userStorage) {
      find(`/favorite/${userStorage._id}`)
      .then(animals => setFavPetsUser({favPets: animals}))
    } else {
      setFavPetsUser([])
    }
   }, []);

  return (
    <FavContext.Provider value={{ ...favPetsUser, getFavs }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;