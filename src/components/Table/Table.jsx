import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell } from '@mui/material';
import { EmptyRow, StyledTable } from './Table.style';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { useTableServices } from '../../hooks';

export const Table = ({ page, rowsPerPage, rows, orderBy, order, setOrder, setOrderBy, dense }) => {
  const { getComparator, stableSort } = useTableServices();
  const emptyRows = rows && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleRequestSort = useCallback((event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }, []);

  return (
    <StyledTable aria-labelledby="usersTable" size={dense ? 'small' : 'medium'}>
      <TableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
      <TableBody>
        {rows &&
          stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  id={row.id}
                  username={row.username}
                  email={row.email}
                  address={row.address.street}
                  phone={row.phone}
                  labelId={labelId}
                  key={row.id}
                />
              );
            })}
        {emptyRows > 0 && (
          <EmptyRow dense={dense} emptyRows={emptyRows}>
            <TableCell colSpan={6} />
          </EmptyRow>
        )}
      </TableBody>
    </StyledTable>
  );
};

Table.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  rows: PropTypes.array,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  setOrder: PropTypes.func,
  setOrderBy: PropTypes.func,
  dense: PropTypes.bool
};
