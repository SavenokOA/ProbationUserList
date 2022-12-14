import {styled, Toolbar, Typography} from "@mui/material";
import {alpha} from "@mui/material/styles";

export const StyledToolbar = styled(Toolbar, {shouldForwardProp: prop => prop !== 'numSelected'
    })(({numSelected, theme})=>({
    backgroundColor: (numSelected > 0 && alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)),
}));

export const SelectedTitle = styled(Typography)(()=>({
    flex: '1 1 100%',
    color: "inherit"
}));

export const DeleteTitle = styled(Typography)(()=>({
    flex: '1 1 100%',
}));