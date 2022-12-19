import React, { useCallback, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit.js';
import { useUpdateUserMutation } from '../../features/UsersTable/lib';

export const EditModal = ({ isOpen, setOpen, username, email, address, phone, id }) => {
  const [isUsername, setUsername] = useState(username);
  const [isEmail, setEmail] = useState(email);
  const [isAddress, setAddress] = useState(address);
  const [isPhone, setPhone] = useState(phone);
  const [updateUser, {}] = useUpdateUserMutation();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleEdit = async () => {
    await updateUser({
      id,
      username: isUsername,
      email: isEmail,
      address: { street: isAddress },
      phone: isPhone
    });
    setOpen(false);
  };

  return (
    <Dialog title="Edit data" open={isOpen}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">Change user data</DialogContentText>
        <TextField
          value={isUsername}
          label="username"
          fullWidth
          margin="normal"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          value={isEmail}
          label="email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          value={isAddress}
          label="address"
          fullWidth
          margin="normal"
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          value={isPhone}
          label="phone"
          fullWidth
          margin="normal"
          onChange={(e) => setPhone(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleEdit} variant="outlined" startIcon={<EditIcon />}>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
