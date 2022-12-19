import React, { useState } from 'react';
import { TableCell, Checkbox, Button, TableRow as MuiTableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { EditModal } from '../../TableModals';

export const TableRow = ({ handleClick, isItemSelected, row, labelId }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

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
        <Button variant="outlined" startIcon={<EditIcon />} onClick={() => setEditModalOpen(true)}>
          Edit
        </Button>
      </TableCell>
      <EditModal
        id={row.id}
        isOpen={isEditModalOpen}
        setOpen={setEditModalOpen}
        username={row.username}
        email={row.email}
        address={row.address.street}
        phone={row.phone}
      />
    </MuiTableRow>
  );
};
