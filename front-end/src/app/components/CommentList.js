'use client';
import React, { useContext } from 'react';
import { CommentContext } from '../context/CommentContext';
import { List, ListItem, ListItemText, Typography, Avatar } from '@mui/material';

const CommentList = () => {
  const { comments } = useContext(CommentContext);

  return (
    <List sx={{ mt: 2 }}>
      <Typography variant='h6' align='center' sx={{ mt: 2 }}>
        Comments
      </Typography>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <ListItem key={index} divider sx={{ bgcolor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
            <Avatar sx={{ mr: 2 }}>{comment.username?.charAt(0)}</Avatar>{' '}
            <ListItemText
              primary={comment.username || 'Anonymous'}
              secondary={
                <Typography variant='body2' sx={{ wordWrap: 'break-word' }}>
                  {comment.comment}
                </Typography>
              }
            />
          </ListItem>
        ))
      ) : (
        <Typography variant='body1' align='center'>
          No comments yet.
        </Typography>
      )}
    </List>
  );
};

export default CommentList;
