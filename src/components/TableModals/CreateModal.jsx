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
import AddIcon from '@mui/icons-material/Add';

export const CreateModal = ({ isOpen, setOpen }) => {
  const [isUsername, setUsername] = useState('');
  const [isEmail, setEmail] = useState('');
  const [isAddress, setAddress] = useState('');
  const [isPhone, setPhone] = useState('');

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleEdit = async () => {
    setOpen(false);
  };

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
        <Button onClick={handleEdit} variant="outlined" startIcon={<AddIcon />}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
