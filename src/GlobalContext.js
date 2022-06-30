import React, { useContext, useState } from "react";

//inital state
const GlobalContext = React.createContext({
  user: {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
};

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [animalSearch, setAnimalSearch] = useState([]);
  const [searchType, setSearchType] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
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
