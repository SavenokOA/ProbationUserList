import { styled, Table, TableRow } from '@mui/material';

export const StyledTable = styled(Table)(() => ({
  minWidth: 750
}));

export const EmptyRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'dense' && prop !== 'emptyRows'
})(({ dense, emptyRows }) => ({
  height: (dense ? 33 : 53) * emptyRows
}));
