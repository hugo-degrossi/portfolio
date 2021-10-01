import React, {useEffect, useState} from 'react';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import {Typography} from "@mui/material";
import Hello from "./components/hello";
import {makeStyles} from "@mui/styles";
import logo from "./logo_kiwi.png"
import NavBar from "./components/nav/navBar";
import AboutMe from "./components/AboutMe";

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
        margin: '5vh 0 15vh 0'
    }
}));




function App() {
    const classes = useStyles();



    return (
        <>
            <ThemeProvider theme={theme}>
                <NavBar />
                <div className={classes.root}>
                    <Hello />
                    <div className={classes.container}>
                        <AboutMe />
                    </div>
                    <div className={classes.container}>
                        <AboutMe />
                    </div>
                    <div className={classes.container}>
                        <AboutMe />
                    </div>
                </div>
            </ThemeProvider>
        </>
  );
}

export default App;
