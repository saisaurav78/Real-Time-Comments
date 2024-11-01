'use client';
import React, { useContext, useState, useEffect } from 'react';
import { FormControl, TextField } from '@mui/material';
import SubmitButton from './Button';
import { CommentContext } from '../context/CommentContext';
import { LoginContext } from '../context/LoginContext';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); 

const CommentBox = () => {
  const { comments, setComments } = useContext(CommentContext);
  const { username } = useContext(LoginContext);
  const [comment, setComment] = useState('');

  useEffect(() => {
    socket.on('newComment', (newComment) => {
      setComments((prevComments) => [newComment, ...prevComments]);
    });

    return () => {
      socket.off('newComment');
    };
  }, [setComments]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = { username: username || 'Anonymous', comment: comment };

      setComments((prevComments) => [newComment, ...prevComments]);

      socket.emit('sendComment', newComment);

      try {
        await axios.post('http://localhost:3001/api/comments', newComment);
        console.log('Comment added to backend successfully');
        setComment('');
      } catch (error) {
        console.error('Error sending comment:', error);
        alert('Error sending comment:', error);
      }
    } else {
      alert('Comment cannot be empty');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mx: 'auto',
          mt: 4,
          p: 3,
          width: '100%',
          maxWidth: 400,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: 'background.paper',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='comment'
          label='Your Comment'
          variant='outlined'
          fullWidth
          sx={{ mb: 2 }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <SubmitButton label='Add Comment' />
      </FormControl>
    </form>
  );
};

export default CommentBox;
