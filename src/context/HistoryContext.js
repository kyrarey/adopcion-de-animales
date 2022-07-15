import { useState, useEffect, createContext,  } from "react";
import { useLocation } from "react-router-dom";


//estado inicial para el contexto
const historyContextInitialState = {
  pageHistory: null,
  updateHistory: () => null,
};

export const HistoryContext = createContext(historyContextInitialState);

// componente provider
const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState({
    pageHistory: null,
  });

  const updateHistory = (address) =>
    setHistory({
      pageHistory: address,
    });

  const location = useLocation().pathname;

  useEffect(() => {
      location
      ? setHistory({ pageHistory: location })
      : setHistory({ pageHistory: null })

    }, []);

  return (
    <HistoryContext.Provider value={{ ...history, updateHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;