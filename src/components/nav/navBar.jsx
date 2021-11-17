import React, {useContext} from 'react';
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
        padding: '30px 50px',
        position: "fixed",
        boxShadow: "none !important",
        display: 'flex !important',
        justifyContent: 'space-between',
        flexDirection: 'row !important',
        transition: 'padding 0.2s, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
        alignItems: 'center',


    },
    active: {
        backgroundColor: theme.palette.background.default + ' !important',
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12) !important",
        padding: '10px 50px',
        transition: 'padding 0.2s, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
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
        filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
        "&:hover":{
            cursor: "pointer"
        }
    }
}));

/*

                <FadeInSection waitingTime={750}>
                    <li className={classes.link}>
                        <HashLink smooth to="#experience" className={classes.hashLink}>
                            <span className={classes.number}>02.</span><span className={classes.text}>Work Experience.</span>
                        </HashLink>
                    </li>
                </FadeInSection>
 */

function NavBar({ContextContainer}) {
    const classes = useStyles();
    const {scrollPosition} = useContext(ContextContainer);
    // State
    return (
        <AppBar className={scrollPosition > 50 ? [classes.navbar, classes.active] : [classes.navbar]}>
            <FadeInSection waitingTime={0}>
                    <ReactSVG className={classes.logo_box} src={logo} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}/>
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
                        <HashLink smooth to="#projects" className={classes.hashLink}>
                            <span className={classes.number}>02.</span><span className={classes.text}>Projects.</span>
                        </HashLink>
                    </li>
                </FadeInSection>
                <FadeInSection waitingTime={1000}>
                    <li className={classes.link}>
                        <a><span className={classes.number}>03.</span><span className={classes.text}>Contact Me.</span></a>
                    </li>
                </FadeInSection>
                </Router>
            </ul>
        </AppBar>
    );
}

export default NavBar;
