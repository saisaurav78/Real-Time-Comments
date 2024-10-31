'use client'
import React from 'react'
import CommentBox from '../components/CommentBox'
import { Container } from '@mui/material'
const page = () => {
  return (
    <>
      <Container sx={{ width: '100%', height: '100%', textAlign: 'center', mt: 4 }}>
       <CommentBox/>
      </Container>
    </>
  );
}

export default page