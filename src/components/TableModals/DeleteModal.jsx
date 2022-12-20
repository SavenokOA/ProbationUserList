import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDeleteUserMutation } from '../../features/UsersTable/lib';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete.js';

export const DeleteModal = ({ isOpen, setOpen, id }) => {
  const [deleteUser] = useDeleteUserMutation();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleDelete = useCallback(async () => {
    await deleteUser(id);
    setOpen(false);
  }, [id]);

  return (
    <Dialog title="Create user" open={isOpen}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure you want to delete this user?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteModal.propTypes = { isOpen: PropTypes.bool, setOpen: PropTypes.func, id: PropTypes.number };
