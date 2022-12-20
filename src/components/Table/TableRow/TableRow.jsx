import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import { TableCell, Button, TableRow as MuiTableRow } from '@mui/material';
import { ButtonContainer } from './TableRow.style.js';
import { EditModal, DeleteModal } from '../../TableModals';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TableRow = memo(({ id, username, email, address, phone, labelId }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditClick = useCallback(() => {
      setEditModalOpen(true)
  }, []);

    const handleDeleteClick = useCallback(() => {
        setDeleteModalOpen(true)
    }, []);

  return (
    <MuiTableRow hover tabIndex={-1}>
      <TableCell component="th" id={labelId} scope="row">
        {username}
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{address}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">
        <ButtonContainer>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={handleEditClick}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </ButtonContainer>
      </TableCell>
      <EditModal
        id={id}
        isOpen={isEditModalOpen}
        setOpen={setEditModalOpen}
        username={username}
        email={email}
        address={address.street}
        phone={phone}
      />
      <DeleteModal id={id} isOpen={isDeleteModalOpen} setOpen={setDeleteModalOpen} />
    </MuiTableRow>
  );
});

TableRow.propTypes = {
  id: PropTypes.number,
  username: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  labelId: PropTypes.string
};
