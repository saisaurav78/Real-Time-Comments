'use client'; 
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/comments');
        console.log('Fetched comments:', response.data);
        setComments(response.data); 
      } catch (error) {
        console.error('Error fetching comments:', error);
        alert('Error fetching comments'); 
      }
    };

    fetchComments(); 
  }, []);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
};
  