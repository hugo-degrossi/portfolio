import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import logo from "../../logo_kiwi.png"
import FadeInSection from "../fadeInSection";
import {HashLink} from "react-router-hash-link";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    navbar: {
        background: theme.palette.background.default +  '!important',
        padding: '30px 50px 30px 50px',
        boxShadow: 'none !important',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row !important',
        alignItems: 'center'
    },
    links: {
        display: "flex",
        flexDirection: 'row',
        listStyle: 'none',
        "@media (max-width: 1150px)": {
            display: 'none',
        },
    },
    link: {
        marginRight: '30px',
        cursor: 'pointer'
    },
    text: {
        color: theme.palette.text.main,
    },
    number: {
        color: theme.palette.primary.main,
        fontFamily: "monospace",
        marginRight: '5px'
    },
    hashLink: {
        textDecoration: 'none'   /* no underline */
    }
}));

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.navbar} position="static">
            <img src={logo}  width="50" height="50"/>
            <ul className={classes.links}>
                <Router>
                <FadeInSection waitingTime={0}>
                    <li className={classes.link}>
                        <HashLink smooth to="#aboutMe" className={classes.hashLink}>
                            <span className={classes.number}>01.</span><span className={classes.text}>About Me.</span>
                        </HashLink>
                    </li>
                </FadeInSection>
                <FadeInSection waitingTime={250}>
                    <li className={classes.link}>
                        <HashLink smooth to="#experience" className={classes.hashLink}>
                            <span className={classes.number}>02.</span><span className={classes.text}>Work Experience.</span>
                        </HashLink>
                    </li>
                </FadeInSection>
                <FadeInSection waitingTime={500}>
                    <li className={classes.link}>
                        <a><span className={classes.number}>04.</span><span className={classes.text}>My Projects.</span></a>
                    </li>
                </FadeInSection>
                <FadeInSection waitingTime={750}>
                    <li className={classes.link}>
                        <a><span className={classes.number}>05.</span><span className={classes.text}>Coding Challenge.</span></a>
                    </li>
                </FadeInSection>
                    <FadeInSection waitingTime={1000}>
                    <li className={classes.link}>
                        <a><span className={classes.number}>06.</span><span className={classes.text}>Contact Me.</span></a>
                    </li>
                </FadeInSection>
                </Router>
            </ul>
        </AppBar>
    );
}

export default NavBar;
