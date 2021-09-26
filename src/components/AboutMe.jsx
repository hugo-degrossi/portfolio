import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default,
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));

function AboutMe() {
    const classes = useStyles();

    return (
        <button type="button" className={classes.root}>
            Theming
        </button>
    );
}

export default AboutMe;
