import React from 'react';
import { makeStyles } from '@mui/styles';
import Typewriter from 'typewriter-effect';
import FadeInSection from "../fadeInSection";
import {Button} from "@mui/material";
import Skills from "../skills/skills";

const baseTimer = 1000

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '20vh 0 0 0',
        minHeight: '65vh'
    },
    hello: {
        color: theme.palette.primary.main,
        fontSize: '1.4rem',
        marginBottom: '3px',
        fontFamily: "Consolas",
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
        fontFamily: 'Montserrat !important',
        alignItems: "center",
        fontWeight: "bold !important"
    },
    download_resume_btn: {
        fontFamily: 'Montserrat !important',
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

                <FadeInSection waitingTime={baseTimer}>
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
            <FadeInSection waitingTime={baseTimer + 200}>
            <h1 className={classes.name}>
                    Hugo De Grossi
            </h1>
            </ FadeInSection>
            <FadeInSection waitingTime={baseTimer + 400}>
            <div className={classes.title}>
                Information Technology Student.
            </div>
            </ FadeInSection>
            <FadeInSection waitingTime={baseTimer + 500}>
            <div className={classes.description}>
                Currently applying for an IT internship (Project Management, Data Science, or Software/Web development sector).
                The internship length is 6 months and will be my end-of-studies internship.
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
