import React, { useState } from 'react';
import { TableCell, Checkbox, Button, TableRow as MuiTableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { TableModal } from '../TableModal/TableModal';

export const TableRow = ({ handleClick, isItemSelected, row, labelId }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
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
      <TableCell align="left">{row.address.street}</TableCell>
      <TableCell align="right">{row.phone}</TableCell>
      <TableCell align="right">
        <Button variant="outlined" startIcon={<EditIcon />} onClick={() => setModalOpen(true)}>
          Edit
        </Button>
      </TableCell>
      <TableModal
        id={row.id}
        isOpen={isModalOpen}
        setOpen={setModalOpen}
        username={row.username}
        email={row.email}
        address={row.address.street}
        phone={row.phone}
      />
    </MuiTableRow>
  );
};
