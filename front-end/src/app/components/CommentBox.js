'use client';
import React, { useContext, useState } from 'react';
import CommentList from './CommentList';
import { FormControl, TextField } from '@mui/material';
import SubmitButton from './Button';
import { CommentContext } from '../context/CommentContext';

const CommentBox = () => {
  const { comments, setComments } = useContext(CommentContext);
  const [comment, setComment] = useState(''); // Local state for the input field

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim()) {
      setComments([...comments, { text: comment }]); // Add the new comment
      setComment(''); // Clear the input field
    }
  };

  return (
    <FormControl
      onSubmit={handleSubmit}
      component='form'
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
      <CommentList />
    </FormControl>
  );
};

export default CommentBox;
