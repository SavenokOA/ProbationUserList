import React from 'react';
import { TableCell, Checkbox, TableRow as MuiTableRow } from '@mui/material';

export const TableRow = ({ handleClick, isItemSelected, row, labelId }) => {
  return (
    <MuiTableRow
      hover
      onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      selected={isItemSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          checked={isItemSelected}
          inputProps={{
            'aria-labelledby': labelId
          }}
        />
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.calories}</TableCell>
      <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">{row.protein}</TableCell>
    </MuiTableRow>
  );
};
