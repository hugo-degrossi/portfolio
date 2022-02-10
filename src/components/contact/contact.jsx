import React from 'react';
import {makeStyles } from '@mui/styles';
import FadeInSection from "../fadeInSection";
import {ContactUs} from "./contactForm";
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
        fontFamily: "Consolas",
        marginRight: '4px',
        "@media (max-width: 1450px)": {
            fontSize: '1.4rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '1.3rem',
            marginRight: '10px',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.2rem',
        },
    },
}));

export default function Contact() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <FadeInSection waitingTime={1500}>
                    <div className={classes.title}>
                        <span className={classes.number}>03. </ span>
                        <span className={classes.title_text}>Contact Me</ span>
                    </div>
                    <div className={classes.divider} />
                    <ContactUs></ContactUs>

                </FadeInSection>
            </div>
        </>
    );
}



