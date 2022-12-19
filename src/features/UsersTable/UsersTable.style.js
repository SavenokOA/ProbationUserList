import { Paper, Box, styled } from '@mui/material';

export const TableWrapper = styled(Box)(() => ({
  width: '100%'
}));

export const TablePaper = styled(Paper)(() => ({
  width: '100%'
}));

export const SpinnerContainer = styled(Paper)(() => ({
  width: '100%',
  minHeight: 500,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
