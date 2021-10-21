import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import Typewriter from 'typewriter-effect';
import FadeInSection from "../fadeInSection";
import {Button} from "@mui/material";
import Skills from "../skills/skills";

const baseTimer = 1250

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '20vh 0 0 0',
        minHeight: '65vh'
    },
    hello: {
        color: theme.palette.primary.main,
        fontSize: '1.4rem',
        marginBottom: '3px',
        fontFamily: "consolas",
        "@media (max-width: 1450px)": {
            fontSize: '1.3rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '1.2rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.1rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1rem',
        }
    },
    name: {
        color: theme.palette.text.main,
        fontSize: '3.4rem',
        marginBottom: '5px',
        fontWeight: "bold",
        display: "flex",
        flexDirection: 'row',
        "@media (max-width: 1450px)": {
            fontSize: '2.7rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '2.4rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.8rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1.5rem',
        }
    },
    title: {
        color: theme.palette.text.main,
        opacity: 0.5,
        fontSize: '3.1rem',
        fontWeight: "bold",
        marginBottom: '2px',
        textTransform: 'uppercase',
        "@media (max-width: 1450px)": {
            fontSize: '3rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '2.6rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '2rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1.5rem',
        }
    },

    description: {
        color: theme.palette.text.main,
        opacity: 0.75,
        fontSize: '1rem',
        marginTop: '20px',
        width: '50%',
        "@media (max-width: 1150px)": {
            width: '70%',
        },
        "@media (max-width: 950px)": {
            width: '80%',
        },
        "@media (max-width: 800px)": {
            width: '100%',
            marginTop: '15px',
        }
    },
    actions: {
        marginTop: '5vh !important',
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: 'row',
        flexWrap: "wrap",
        width: '100%',
        alignItems: "center"
    },
    center: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    hire_me_btn: {
        fontFamily: 'Segoe UI !important',
        alignItems: "center",
        fontWeight: "bold !important"
    },
    download_resume_btn: {
        fontFamily: 'Segoe UI !important',
        marginRight: '25px !important',
        alignItems: "center",
        fontWeight: "bold !important",
        "@media (max-width: 1150px)": {
            marginRight: '5px !important',
        },
    },
    skills: {
        width: '50%',
        "@media (max-width: 1150px)": {
            display: 'none',
        },
    },
    space: {
        marginRight: '15px',
        "@media (max-width: 800px)": {
            marginRight: '5px',
        }
    }
}));

function Hello() {
    const classes = useStyles();

    return (
        <div className={classes.container}>


            <div className={classes.hello}>

                <FadeInSection waitingTime={baseTimer + 0}>
                    <Typewriter

                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello World.')
                                .pauseFor(600)
                                .deleteChars(6)
                                .typeString("You.")
                                .pauseFor(600)
                                .deleteAll()
                                .typeString('Welcome.')
                                .start();
                        }}
                    />
                </ FadeInSection>

            </div>
            <h1 className={classes.name}>
                <FadeInSection waitingTime={baseTimer + 100}>
                    H
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 125}>
                    u
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 150}>
                    g
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 175}>
                    o
                    <span className={classes.space}/>
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 200}>
                    D
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 225}>
                    e
                    <span className={classes.space}/>
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 250}>
                    G
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 275}>
                    r
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 300}>
                    o
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 325}>
                    s
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 350}>
                    s
                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 375}>
                    i
                </ FadeInSection>
            </h1>
            <FadeInSection waitingTime={baseTimer + 400}>
            <div className={classes.title}>
                Information Technology Student.
            </div>
            </ FadeInSection>
            <FadeInSection waitingTime={baseTimer + 500}>
            <div className={classes.description}>
                Currently applying for an IT internship in the web developement sector, however, I
                am open to any opportunity. The internship length is 19 weeks (from last week of
                september 2021 to first week of february 2022).
            </div>
            </ FadeInSection>

            <div className={classes.actions}>
                <div className={classes.skills}>
                    <FadeInSection waitingTime={baseTimer + 800}>
                        <Skills />
                    </ FadeInSection>
                </div>

                <FadeInSection waitingTime={baseTimer + 800}>
                    <div className={classes.center}>
                        <Button className={classes.download_resume_btn} variant="contained">
                            Check My Resume.
                        </Button>
                    </div>


                </ FadeInSection>
                <FadeInSection waitingTime={baseTimer + 1200}>
                    <div className={classes.center}>
                        <Button className={classes.hire_me_btn} variant="outlined">
                            Hire me.
                        </Button>
                    </div>


                </ FadeInSection>
            </div>


        </div>

    );
}

export default Hello;
