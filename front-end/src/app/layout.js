'use client';
import { LoginProvider } from './context/LoginContext';
import { Roboto } from 'next/font/google';
import './globals.css';
import { CommentProvider } from './context/CommentContext';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <LoginProvider>
          <CommentProvider>{children}</CommentProvider>
        </LoginProvider>
      </body>
    </html>
  );
}
