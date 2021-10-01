import React, {useState} from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import FadeInSection from "./fadeInSection";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    box: {
        height: '400px',
        flexBasis: '55%',
    },
    box_image: {
        height: '250px',
        width: '250px',
        margin: '20px',
        border: '2px solid' + theme.palette.primary.main,

    },
    title: {
        marginBottom: '2px',
    },
    title_text: {
        color: theme.palette.text.main,
        opacity: 0.7,
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
        color: theme.palette.primary.vibrant,
        fontSize: '1.4rem',
        fontFamily: "monospace",
        marginRight: '4px',
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
    description: {
        color: theme.palette.text.main,
        opacity: 0.55,
        fontSize: '1rem',
        marginTop: '20px',
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
    }
}));

function AboutMe() {
    const classes = useStyles();

    const [isVisible, setIsVisible] = useState(false)


    return (
        <>
            <FadeInSection waitingTime={1500}>
                <div className={classes.root}>
                    <div className={classes.box}>
                        <div className={classes.title}>
                            <span className={classes.number}>01. </ span>


                            <span className={classes.title_text}>About Me</ span>
                        </div>
                        <div className={classes.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>

                    </div>
                    <div className={classes.box_image}>

                    </div>


                </div>

            </FadeInSection>
        </>
    );
}

export default AboutMe;
