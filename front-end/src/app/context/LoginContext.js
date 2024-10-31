
import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return <LoginContext.Provider value={{ isAuth, setIsAuth }}>{children}</LoginContext.Provider>;
};
