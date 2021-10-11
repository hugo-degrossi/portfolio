import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import logo from "../../h_logo.svg"
import FadeInSection from "../fadeInSection";
import {HashLink} from "react-router-hash-link";
import {ReactSVG} from "react-svg";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "250px",
        border: "2px solid" + theme.palette.primary.main,
    },
}));

export default function ProjectCard() {
    const classes = useStyles();

    return (
        <>

            <FadeInSection waitingTime={1500}>
                <div className={classes.root}>

                </div>
            </FadeInSection>
        </>
    );
}
