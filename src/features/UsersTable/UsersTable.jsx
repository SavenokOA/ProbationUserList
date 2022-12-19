import React from 'react';
import { TableContainer, TablePagination, FormControlLabel, Switch } from '@mui/material';
import { TableToolbar, Table } from '../../components';
import { TablePaper, TableWrapper } from './UsersTable.style';
import { useGetAllUsersQuery } from './lib';

export const UsersTable = () => {
  const { data: rows, error, isLoading } = useGetAllUsersQuery();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  return (
    <TableWrapper>
      <TablePaper>
        <TableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            selected={selected}
            setSelected={setSelected}
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
