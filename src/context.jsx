import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
