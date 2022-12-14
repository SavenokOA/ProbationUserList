import React from 'react';
import { TableBody, TableCell } from '@mui/material';
import { EmptyRow, StyledTable } from './Table.style';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';
import { useTableServices } from '../../hooks';

export const Table = ({
  selected,
  setSelected,
  page,
  rowsPerPage,
  rows,
  orderBy,
  order,
  setOrder,
  setOrderBy,
  dense
}) => {
  const { getComparator, stableSort } = useTableServices();
  const isSelected = (name) => selected.indexOf(name) !== -1;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <StyledTable aria-labelledby="usersTable" size={dense ? 'small' : 'medium'}>
      <TableHead
        numSelected={selected.length}
        order={order}
        orderBy={orderBy}
        onSelectAllClick={handleSelectAllClick}
        onRequestSort={handleRequestSort}
        rowCount={rows.length}
      />
      <TableBody>
        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
        {stableSort(rows, getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            const isItemSelected = isSelected(row.name);
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                handleClick={handleClick}
                isItemSelected={isItemSelected}
                row={row}
                labelId={labelId}
                key={row.name}
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
