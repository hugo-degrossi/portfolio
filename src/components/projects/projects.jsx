import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import logo from "../../h_logo.svg"
import FadeInSection from "../fadeInSection";
import {HashLink} from "react-router-hash-link";
import {ReactSVG} from "react-svg";
import ProjectCard from "./projectCard";

import PP from "../../media/profilpic.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '20vh',
    },
    divider: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '3px',
        width: '65%',
        backgroundColor: theme.palette.primary.main,
        opacity: '0.1',
        marginTop: '5px',
        marginBottom: '30px',
        "@media (max-width: 1150px)": {
            width: '100%',
        },
        "@media (max-width: 800px)": {
            marginBottom: '15px',
        }
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
        "@media (max-width: 1150px)": {
            fontSize: '1.7rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.6rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1.5rem',
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
    projects: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "35px",
        marginTop: "50px"
    },
    projects_container: {
        display: "flex",
        flexDirection: "column",
    },
    project_card: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderRadius: "4px",
        position: "relative",
        backgroundColor: "#381E1E",
        minHeight: "180px",
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
        '&:hover': {
            "& $image_box": {
                //transform: 'translate(10px, -10px)',
            },
            "& $box": {
                transform: 'translate(-2px, -2px)',
                opacity: 0
            },
        }
    },
    placeholder: {
        maxWidth: "30%",
        aspectRatio: "1",
    },
    image_box: {
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        borderRadius: "4px",
        transition: "all 0.3s",
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
        top: "20px",
        left: "-20px",
        maxWidth: "30%",
        height: "100%",
        aspectRatio: "1",
        zIndex: 2,
    },
    box: {
        position: "absolute",
        borderRadius: "4px",
        transition: " all 1s, transform 0.3s",
        border: '2px solid' + theme.palette.primary.main,
        top: "10px",
        left: "-10px",
        maxWidth: "30%",
        zIndex: 1,
        height: "100%",
        aspectRatio: "1",
    },
    card_content: {
        padding: "20px",
    },
    name: {
        fontWeight: "bold",
        fontSize: "1.1rem",
        color: theme.palette.primary.main,
    },
    description: {
        fontSize: "1rem",
        color: theme.palette.text.main,
        marginTop: "10px",
        marginLeft: "10px",
        opacity: 0.9,
    },
    project: {
        aspectRatio: "1",
        borderRadius: '4px',
        position: "relative",
        '&:hover': {
            "& $box1": {
                transform: 'translate(5px, 5px)'
            },
            "& $box2": {
                transform: 'translate(-3px, -3px)',
                borderRadius: '0px',
            }
        }
    },
    box1: {
        position: "absolute",
        top: "-5px",
        left: "-5px",
        border: '2px solid' + theme.palette.primary.main,
        width: "100%",
        height: "100%",
        transition: "all 0.3s",
        borderRadius: '4px'
    },
    box2: {
        position: "absolute",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        top: "5px",
        left: "5px",
        width: "100%",
        height: "100%",
        transition: "all 0.3s",
        borderRadius: '4px',

    },
    projectInfos: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.main,
    },
    chips: {
        justifyContent: 'center',
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        padding: "10px"
    },
    chip: {
        backgroundColor: theme.palette.primary.third,
        padding: "2px 10px",
        margin: "3px",
        color: theme.palette.primary.main,
        opacity: 0.8,
        borderRadius: "20px",
        fontSize: "0.9rem",
        fontWeight: "bold"
    }
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <>
            <FadeInSection waitingTime={1500}>
                <div className={classes.root}>
                    <div className={classes.title}>
                        <span className={classes.number}>02. </ span>
                        <span className={classes.title_text}>Projects</ span>
                    </div>
                    <div className={classes.divider} />

                    <div className={classes.projects_container}>
                        <div className={classes.project_card}>
                            <div className={classes.image_box} style={{backgroundImage: `url(${PP})`}} />
                            <div className={classes.placeholder} />
                            <div className={classes.card_content}>
                                <div className={classes.name}>My Project Name</div>
                                <div className={classes.description}>This is a description about what the project is.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </FadeInSection>
        </>
    );
}

