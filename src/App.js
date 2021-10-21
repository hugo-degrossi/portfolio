import React, {useEffect, useState} from 'react';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import {Typography} from "@mui/material";
import Hello from "./components/home/hello";
import {makeStyles} from "@mui/styles";
import logo from "./logo_kiwi.png"
import NavBar from "./components/nav/navBar";
import AboutMe from "./components/aboutMe/AboutMe";
import Experience from "./components/experience/experience";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import logo_animated from "./h_logo_animated_4.svg"
import logo_static from "./h_logo_static.svg"
import {ReactSVG} from "react-svg";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 30vw 20px 30vw',
        "@media (max-width: 1450px)": {
            padding: '0 25vw 20px 25vw',
        },
        "@media (max-width: 1150px)": {
            padding: '0 20vw 20px 20vw',
        },
        "@media (max-width: 950px)": {
            padding: '0 16vw 20px 16vw',
        },
        "@media (max-width: 800px)": {
            padding: '0 8vw 20px 8vw',
        }
    },
    logo: {
        position: "absolute",
        top: '25px',
        left: '25px',
    },
    container: {
        display: 'block',
        margin: '5vh 0 15vh 0'
    },
    root_loading: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center"
    },
    logo_loading: {
        width: '200px',
        height: '200px',
        filter: 'drop-shadow( 0px 0px 4px rgba(0, 0, 0, .7))',
        opacity: '1',
        transition: "all 1s"
    },
    logo_loading_op: {
        width: '200px',
        height: '200px',
        filter: 'drop-shadow( 0px 0px 4px rgba(0, 0, 0, .7))',
        transition: "all 1s",
        opacity: '0',
    },

}));




function App() {
    const classes = useStyles();

    const [loading, setLoading] = useState(true)
    const [opacity, setOpacity] = useState(false)

    setTimeout(() => {
        setOpacity(true)
    }, 2500);

    setTimeout(() => {
        setLoading(false)
    }, 3500);

    if (loading) {
        return <div className={classes.root_loading}>
                <img className={opacity ? classes.logo_loading_op : classes.logo_loading} src={logo_animated} />
        </div>
    }


    return (
        <>
            <ThemeProvider theme={theme}>
                <NavBar />
                <div className={classes.root}>
                    <div id={'hello'} className={classes.container}>
                        <Hello />
                    </div>
                    <div id={'aboutMe'} className={classes.container}>
                        <AboutMe />
                    </div>
                    <div id={'experience'} className={classes.container}>
                        <Experience />
                    </div>

                    <div id={'projects'} className={classes.container}>
                        <Projects />
                    </div>
                </div>
            </ThemeProvider>
        </>
  );
}

export default App;
