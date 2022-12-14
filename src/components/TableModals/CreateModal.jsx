import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useCreateUserMutation } from '../../features/UsersTable/index.js';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const CreateModal = ({ isOpen, setOpen }) => {
  const [isUsername, setUsername] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isAddress, setAddress] = useState('');
  const [isPhone, setPhone] = useState('');
  const [createUser] = useCreateUserMutation();

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleCreate = useCallback(async () => {
    await createUser({
      username: isUsername.trim(),
      email: isEmail.trim(),
      address: { street: isAddress.trim() },
      phone: isPhone.trim()
    });

    setUsername('');
    setEmail('');
    setAddress('');
    setPhone('');

    setOpen(false);
  }, [isUsername, isEmail, isAddress, isPhone]) ;

  return (
    <Dialog title="Create user" open={isOpen}>
      <DialogTitle>Create</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">Enter user data</DialogContentText>
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
        <Button onClick={handleCreate} variant="outlined" startIcon={<AddIcon />}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CreateModal.propTypes = { isOpen: PropTypes.bool, setOpen: PropTypes.func };
