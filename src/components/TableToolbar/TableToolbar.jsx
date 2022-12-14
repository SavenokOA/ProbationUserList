import React from 'react';
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete.js";
import {DeleteTitle, SelectedTitle, StyledToolbar} from "./TableToolbar.style";

export const TableToolbar = ({numSelected}) => (
    <StyledToolbar numSelected={numSelected}>
        {numSelected > 0 ? (
            <SelectedTitle variant="subtitle1" component="div" >
                {numSelected} selected
            </SelectedTitle>
        ) : (
            <DeleteTitle variant="h6" id="tableTitle" component="div">
                Users
            </DeleteTitle>
        )}

        {numSelected > 0 && (
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        )}
    </StyledToolbar>
);

TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};
