'use client';
import React, { useContext } from 'react';
import CommentBox from '../components/CommentBox';
import { Container } from '@mui/material';
import { LoginContext } from '../context/LoginContext';
import Link from 'next/link';
import CommentList from '../components/CommentList';

const Page = () => {
  const { isAuth } = useContext(LoginContext);

  return (
    <>
      <Container sx={{ width: '100%', height: '100%', textAlign: 'center', mt: 4 }}>
        {isAuth ? (
          <>
            <CommentBox />
            <CommentList/>
          </>
        ) : (
          <Link href='/'>Login again</Link>
        )}
      </Container>
    </>
  );
};

export default Page;
