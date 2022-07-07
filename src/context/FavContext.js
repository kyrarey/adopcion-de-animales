import { useState, useEffect, createContext } from "react";
import find from "../hooks/find";


//estado inicial para el contexto
const favContextInitialState = {
  favs: [],
  toggleFav: () => null,
};

export const FavContext = createContext(favContextInitialState);

// componente provider
const FavContextProvider = ({ children }) => {
  const [favPets, setFavPets] = useState([]);
  const toggleFav = pets => setFavPets(pets);


  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("newUser"));
    if(userStorage) {
      find(`/favorite/${userStorage._id}`)
      .then(animals => {setFavPets(animals)
      console.log(favPets)})
    } else {
      setFavPets([])
    }
   }, []);

  return (
    <FavContext.Provider value={{ ...favPets, toggleFav }}>
      {children}
    </FavContext.Provider>
  );
};

export default FavContextProvider;