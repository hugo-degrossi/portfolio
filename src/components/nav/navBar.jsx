import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import {Typography} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import logo from "../../h_logo.svg"
import FadeInSection from "../fadeInSection";
import {HashLink} from "react-router-hash-link";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ReactSVG} from "react-svg";


const useStyles = makeStyles((theme) => ({
    navbar: {
        background: 'transparent !important',
        padding: '30px 50px 30px 50px',
        boxShadow: 'none !important',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row !important',
        alignItems: 'center',

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
        fontFamily: "consolas",
        marginRight: '5px'
    },
    hashLink: {
        textDecoration: 'none'   /* no underline */
    },
    logo_box: {
        width: '50px',
        height: '50px',
        filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))'
    }
}));

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.navbar} position="static">
            <FadeInSection waitingTime={0}>
                <ReactSVG className={classes.logo_box} src={logo} />
            </FadeInSection>
            <ul className={classes.links}>
                <Router>
                <FadeInSection waitingTime={500}>
                    <li className={classes.link}>
                        <HashLink smooth to="#aboutMe" className={classes.hashLink}>
                            <span className={classes.number}>01.</span><span className={classes.text}>About Me.</span>
                        </HashLink>
                    </li>
                </FadeInSection>
                <FadeInSection waitingTime={750}>
                    <li className={classes.link}>
                        <HashLink smooth to="#experience" className={classes.hashLink}>
                            <span className={classes.number}>02.</span><span className={classes.text}>Work Experience.</span>
                        </HashLink>
                    </li>
                </FadeInSection>
                <FadeInSection waitingTime={1000}>
                    <li className={classes.link}>
                        <a><span className={classes.number}>03.</span><span className={classes.text}>My Projects.</span></a>
                    </li>
                </FadeInSection>
                    <FadeInSection waitingTime={1250}>
                    <li className={classes.link}>
                        <a><span className={classes.number}>04.</span><span className={classes.text}>Contact Me.</span></a>
                    </li>
                </FadeInSection>
                </Router>
            </ul>
        </AppBar>
    );
}

export default NavBar;
