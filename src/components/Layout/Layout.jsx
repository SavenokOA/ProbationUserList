import React from 'react';
import { Typography } from '@mui/material';
import { Wrapper } from './Layout.style.js';

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Typography variant="h2">User table</Typography>
      {children}
    </Wrapper>
  );
};
