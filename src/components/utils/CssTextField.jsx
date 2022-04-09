
import theme from "../../theme";
import {styled, TextField} from "@mui/material";

export const CssTextField = styled(TextField, theme)({
    '& .MuiOutlinedInput-root': {
        padding: '0',

        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '& input': {
            backgroundColor: '#381e1e', //theme.palette.primary.second
            color: theme.palette.primary.fourth,
            transition: 'all 0.2s',
            fontSize: '0.9rem',
            fontWeight: '600 !important'
        },
        '&:hover input': {
            color: theme.palette.primary.main,
        },
        '&.Mui-focused input': {
            color: theme.palette.primary.main,
        },

        '& textarea': {
            padding: '16.5px 14px',
            backgroundColor: '#381e1e', //theme.palette.primary.second
            color: theme.palette.primary.fourth,
            transition: 'all 0.2s',
            fontSize: '0.9rem',
            margin: 0,
            fontWeight: '600 !important'
        },
        '&:hover textarea': {
            color: theme.palette.primary.main,
        },
        '&.Mui-focused textarea': {
            color: theme.palette.primary.main,
        },
    },
});