import React from 'react';
import { TableCell, Checkbox, Button, TableRow as MuiTableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const TableRow = ({ handleClick, isItemSelected, row, labelId }) => (
  <MuiTableRow hover aria-checked={isItemSelected} tabIndex={-1} selected={isItemSelected}>
    <TableCell padding="checkbox">
      <Checkbox
        role="checkbox"
        onClick={(event) => handleClick(event, row.name)}
        color="primary"
        checked={isItemSelected}
        inputProps={{
          'aria-labelledby': labelId
        }}
      />
    </TableCell>
    <TableCell component="th" id={labelId} scope="row" padding="none">
      {row.username}
    </TableCell>
    <TableCell align="left">{row.email}</TableCell>
    <TableCell align="left">
      {row.address.city} {row.address.street}
    </TableCell>
    <TableCell align="right">{row.phone}</TableCell>
    <TableCell align="right">
      <Button color="secondary" variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
    </TableCell>
  </MuiTableRow>
);
