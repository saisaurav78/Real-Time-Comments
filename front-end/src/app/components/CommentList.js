'use client';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CommentContext } from '../context/CommentContext';

export default function CommentList() {
  const { comments } = React.useContext(CommentContext);

  if (!comments || comments.length === 0) {
    return <Typography>No comments available</Typography>;
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt: 3 }}>
      {comments.map((comment, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt={comment.author || 'User'}
                src={comment.avatar || '/static/images/avatar/default.jpg'}
              />
            </ListItemAvatar>
            <Typography variant='body1' sx={{ ml: 2 }}>
              {comment.text}
            </Typography>
          </ListItem>
          {index < comments.length - 1 && <Divider variant='inset' component='li' />}
        </React.Fragment>
      ))}
    </List>
  );
}
