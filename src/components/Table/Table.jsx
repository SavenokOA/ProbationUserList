import React from 'react';
import { TableBody, TableCell } from '@mui/material';
import { EmptyRow, StyledTable } from './Table.style';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { useTableServices } from '../../hooks';

export const Table = ({ page, rowsPerPage, rows, orderBy, order, setOrder, setOrderBy, dense }) => {
  const { getComparator, stableSort } = useTableServices();
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = rows && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <StyledTable aria-labelledby="usersTable" size={dense ? 'small' : 'medium'}>
      <TableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
      <TableBody>
        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
        {rows &&
          stableSort(rows, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return <TableRow row={row} labelId={labelId} key={row.id} />;
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
