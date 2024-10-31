'use client';
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoginContext } from './context/LoginContext';
import LoginForm from './components/LoginForm';

export default function LoginPage() {
  const { isAuth } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push('/comments');
    }
  }, [isAuth, router]);

  return <>{!isAuth && <LoginForm />}</>;
}
