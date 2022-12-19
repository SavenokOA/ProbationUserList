import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  TableRow,
  TableCell,
  TableSortLabel,
  TableHead as MuiTableHead,
  Button
} from '@mui/material';
import { CreateModal } from '../../TableModals';
import { visuallyHidden } from '@mui/utils';
import AddIcon from '@mui/icons-material/Add.js';

const headCells = [
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'Username'
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email'
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address'
  },
  {
    id: 'phone-number',
    numeric: true,
    disablePadding: false,
    label: 'Phone number'
  }
];

export const TableHead = ({ order, orderBy, onRequestSort }) => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <MuiTableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right">
          <Button
            onClick={() => setCreateModalOpen(true)}
            variant="outlined"
            startIcon={<AddIcon />}
          >
            Create
          </Button>
        </TableCell>
      </TableRow>
      <CreateModal isOpen={isCreateModalOpen} setOpen={setCreateModalOpen} />
    </MuiTableHead>
  );
};

TableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired
};
