import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(10),
  padding: theme.spacing(5)
}));
