'use client';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import SubmitButton from './Button';
import { FormControl, FormLabel, Typography, Box } from '@mui/material';
import { LoginContext } from '../context/LoginContext';

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [error, setError] = useState(null);
  const { setIsAuth } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) setError('username is required')
    else {
    
      try {
        const res = await axios.post('http://localhost:3001/api/login/', { username: user });
        const sessionID = res.data.sessionID
        localStorage.setItem("sessionID", sessionID)
        if (res.status === 200) {
          setIsAuth(true);
        }
        else {
          setError(res.data.message);
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              width:'30%',
              mt: '10%',
              m:'0 auto'
      }}
    >
      <FormControl component='form' onSubmit={handleSubmit} noValidate autoComplete='off' fullWidth>
        <Typography variant='h5' component='h2' gutterBottom align='center'>
          Login
        </Typography>
        <TextField
          id='outlined-username'
          label='username'
          variant='outlined'
          value={user}
          onChange={(e) => setUser(e.target.value)}
                  sx={{ mb: 2 }} 
                  name='username'
        />
        <SubmitButton label='Login' />
        {error && <FormLabel sx={{ color: 'red', mt: 2 }}>{error}</FormLabel>}
      </FormControl>
    </Box>
  );
}
