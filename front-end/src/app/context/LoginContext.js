import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState(''); 

  return (
    <LoginContext.Provider value={{ isAuth, setIsAuth, username, setUsername }}>
      {children}
    </LoginContext.Provider>
  );
};
