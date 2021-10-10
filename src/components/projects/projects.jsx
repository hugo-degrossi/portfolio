import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import logo from "../../h_logo.svg"
import FadeInSection from "../fadeInSection";
import {HashLink} from "react-router-hash-link";
import {ReactSVG} from "react-svg";
import ProjectCard from "./projectCard";


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '20vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        "@media (max-width: 1150px)": {
            flexDirection: 'column',
            justifyContent: 'center',
        },

    },
    card_container: {
        display: "flex",
        flexBasis: '33%',
        flexWrap: 'wrap'
    },
    divider: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '3px',
        width: '65%',
        backgroundColor: theme.palette.primary.main,
        opacity: '0.1',
        marginTop: '5px',
        marginBottom: '15px',
        "@media (max-width: 1150px)": {
            width: '100%',
        },
    },
    title: {
        marginBottom: '2px',
        "@media (max-width: 1150px)": {
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'center',
        },
    },
    title_text: {
        color: theme.palette.text.main,
        fontSize: '1.8rem',
        fontWeight: "bold",
        letterSpacing: 0,
        "@media (max-width: 1450px)": {
            fontSize: '1.8rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '1.6rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.4rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1.2rem',
        }
    },
    number: {
        color: theme.palette.primary.main,
        fontSize: '1.4rem',
        fontFamily: "consolas",
        marginRight: '4px',
        "@media (max-width: 1450px)": {
            fontSize: '1.3rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '1.2rem',
            marginRight: '10px',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.1rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1rem',
        }
    },
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <>

            <FadeInSection waitingTime={1500}>
                <div className={classes.root}>
                    <div className={classes.title}>
                        <span className={classes.number}>03. </ span>
                        <span className={classes.title_text}>Projects</ span>
                    </div>
                    <div className={classes.divider} />
                    <div className={classes.container}>
                        <div className={classes.card_container}><ProjectCard /></div>
                        <div className={classes.card_container}><ProjectCard /></div>
                        <div className={classes.card_container}><ProjectCard /></div>
                        <div className={classes.card_container}><ProjectCard /></div>
                    </div>
                </div>
            </FadeInSection>
        </>
    );
}

