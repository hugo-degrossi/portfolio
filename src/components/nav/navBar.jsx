import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import logo from "../../logo_kiwi.png"

const useStyles = makeStyles((theme) => ({
    navbar: {
        background: theme.palette.background.default +  '!important',
        padding: '30px 50px 30px 50px',
        boxShadow: 'none !important'
    }
}));

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.navbar} position="static">
            <img src={logo}  width="50" height="50"/>

        </AppBar>
    );
}

export default NavBar;
