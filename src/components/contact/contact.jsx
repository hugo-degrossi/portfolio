import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {tooltipClasses} from "@mui/material";
import FadeInSection from "../fadeInSection";
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
export default function Contact() {
    const classes = useStyles();
    //<LinkIcon fontSize={"large"} color={"info"}/>
    return (
        <>
            <div className={classes.root}>
                <FadeInSection waitingTime={1500}>
                    <div className={classes.title}>
                        <span className={classes.number}>03. </ span>
                        <span className={classes.title_text}>Contact Me</ span>
                    </div>
                    <div className={classes.divider} />
                </FadeInSection>


            </div>
        </>
    );
}

