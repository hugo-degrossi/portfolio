import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Button, tooltipClasses, Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import logo from "../../h_logo.svg"
import FadeInSection from "../fadeInSection";
import {HashLink} from "react-router-hash-link";
import {ReactSVG} from "react-svg";
import ProjectCard from "./projectCard";

import PP from "../../media/profilpic.jpg"
import LinkIcon from '@mui/icons-material/Link';
import Typewriter from "typewriter-effect";
import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";

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
        justifyContent: "space-between",
        width: "100%",
        borderRadius: "4px",
        position: "relative",
        backgroundColor: "#381E1E",
        minHeight: "180px",
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
        '&:hover': {
            "& $image_box": {
            },
            "& $box": {
                opacity: 0.7
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
        transition: "all 0.3s",
        backgroundColor: theme.palette.primary.main,
        top: "20px",
        left: "-20px",
        maxWidth: "30%",
        height: "100%",
        aspectRatio: "1",
        opacity: 0,
        zIndex: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        color: theme.palette.info.main,
        '&:hover' : {
            cursor: 'pointer'
        }
    },
    card_content: {
        padding: "20px",
        width: '80%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
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
    actions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end"

    },
    btn: {
        fontFamily: 'Montserrat !important',
        fontWeight: "bold !important"
    },
}));
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#DC9777",
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: "bold"
    },
}));
export default function Projects() {
    const classes = useStyles();
    //<LinkIcon fontSize={"large"} color={"info"}/>
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
                            <CustomTooltip title="Click to access" placement="top">
                                <div className={classes.box}>
                                    <LinkIcon fontSize={"large"} color={"info"}/>

                                </div>
                            </CustomTooltip>
                            <div className={classes.placeholder} />
                            <div className={classes.card_content}>
                                <div className={classes.name}>My Project Name</div>
                                <div className={classes.description}>This is a description about what the project is.</div>

                                <div className={classes.actions}>
                                    <Button className={classes.btn} variant="outlined">
                                        See on Github
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </FadeInSection>
        </>
    );
}

