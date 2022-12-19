import React, { useState } from 'react';
import { TableCell, Button, TableRow as MuiTableRow } from '@mui/material';
import { ButtonContainer } from './TableRow.style.js';
import { EditModal } from '../../TableModals';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableRow = ({ row, labelId }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  return (
    <MuiTableRow hover tabIndex={-1}>
      <TableCell component="th" id={labelId} scope="row">
        {row.username}
      </TableCell>
      <TableCell align="left">{row.email}</TableCell>
      <TableCell align="left">{row.address.street}</TableCell>
      <TableCell align="right">{row.phone}</TableCell>
      <TableCell align="right">
        <ButtonContainer>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => setEditModalOpen(true)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => setEditModalOpen(true)}
          >
            Delete
          </Button>
        </ButtonContainer>
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
