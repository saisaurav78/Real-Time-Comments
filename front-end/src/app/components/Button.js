'use client'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SubmitButton({ label}) {
  return (
    <Stack spacing={2} direction='row'>
      <Button type='submit' variant='contained'>{ label}</Button>
    </Stack>
  );
}
