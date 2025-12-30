// components/ContextAPIProvide.js
"use client"
import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    theme: 'light',
    user: null,
    blogIdGet: null,
  });

  const updateState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  return useContext(MyContext);
};
