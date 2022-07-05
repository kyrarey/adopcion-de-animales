import React, { useContext, useState } from "react";

//inital state
const GlobalContext = React.createContext({
  newUser: {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
};

export const GlobalProvider = ({ children }) => {
  const [newUser, setNewUser] = useState({});
  /* const [newFavorite, setNewFavorite] = useState([]); */
  const [animalSearch, setAnimalSearch] = useState([]);
  const [searchType, setSearchType] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        newUser,
        setNewUser,
        /* newFavorite,
        setNewFavorite, */
        animalSearch,
        setAnimalSearch,
        searchType,
        setSearchType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
