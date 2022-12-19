import React, { useState } from 'react';
import { useGetAllUsersQuery } from './lib';
import { Table } from '../../components';
import { SpinnerContainer, TablePaper, TableWrapper } from './UsersTable.style';
import {
  TableContainer,
  TablePagination,
  FormControlLabel,
  Switch,
  CircularProgress
} from '@mui/material';

export const UsersTable = () => {
  const { data: rows, error, isLoading } = useGetAllUsersQuery();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <CircularProgress size={100} />
      </SpinnerContainer>
    );
  }

  if (error) {
    return <SpinnerContainer>Something goes wrong with fetching data</SpinnerContainer>;
  }

  return (
    <TableWrapper>
      <TablePaper>
        <TableContainer>
          <Table
            page={page}
            rowsPerPage={rowsPerPage}
            rows={rows}
            orderBy={orderBy}
            order={order}
            setOrder={setOrder}
            setOrderBy={setOrderBy}
            dense={dense}
          />
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows ? rows.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TablePaper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </TableWrapper>
  );
};
