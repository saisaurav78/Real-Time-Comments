import React, { createContext, useState } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]); // Only manage the list of comments

  return (
    <CommentContext.Provider value={{ comments, setComments }}>{children}</CommentContext.Provider>
  );
};
