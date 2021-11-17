import React, {createContext, useEffect, useState} from 'react';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import {tooltipClasses} from "@mui/material";
import Hello from "./components/home/hello";
import {makeStyles} from "@mui/styles";
import NavBar from "./components/nav/navBar";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/projects";
import logo_animated from "./h_logo_animated_4.svg"
import github from  "./media/icons/github.png"
import linkedin from  "./media/icons/linkedin.png"
import Tooltip from '@mui/material/Tooltip';
import styled from "@emotion/styled";
import FadeInSection from "./components/fadeInSection";

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
    media: {
        position: "fixed",
        bottom: '0',
        left: '50px',
        width: "50px",
        height: "300px",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        flexDirection: "column"
    },
    image: {
        width: "30px",
        margin: "5px 0",
        height: "30px",
        "&:hover": {
            cursor: "pointer"
        }
    },
    bar: {
        marginTop: '5px',
        width: "2px",
        height: "140px",
        backgroundColor: "#b1775f",
    },
    logo: {
        position: "absolute",
        top: '25px',
        left: '25px',
    },
    container: {
        display: 'block',
        margin: 'calc(5vh-100px) 0 15vh 0',
        paddingTop: '100px'
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
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#b1775f",
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: "bold"
    },
}));


const ContextContainer = createContext(null)

const baseTimer = 2200

function App() {
    const classes = useStyles();

    const [loading, setLoading] = useState(true)
    const [opacity, setOpacity] = useState(false)


    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        console.log(position)
        setScrollPosition(position);
    };

    useEffect(() => {
        if (window.location.href.includes("/#")) {window.location.href= window.location.href.substring(0, window.location.href.indexOf('/#'));}
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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


    /*
    <div id={'experience'} className={classes.container}>
        <Experience />
    </div>
     */
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.media}>

                    <FadeInSection waitingTime={baseTimer + 200}>
                        <CustomTooltip title="Contact me on LinkedIn" placement="right">
                            <img className={classes.image} onClick={() => {window.open("https://www.linkedin.com/in/hugo-de-grossi-796524180/", "_blank")}} src={linkedin} alt={'Linkedin'}/>
                        </CustomTooltip>
                    </ FadeInSection>

                    <FadeInSection waitingTime={baseTimer + 300}>
                        <CustomTooltip title="Check my Github!" placement="right">
                            <img className={classes.image} onClick={() => {window.open("https://github.com/hugo-degrossi", "_blank")}} src={github} alt={'Github'}/>
                        </CustomTooltip>
                    </ FadeInSection>

                    <FadeInSection waitingTime={baseTimer + 400}>
                        <div className={classes.bar} />
                    </ FadeInSection>
                </div>
                <ContextContainer.Provider value={{scrollPosition}}>
                    <NavBar ContextContainer={ContextContainer} />
                </ContextContainer.Provider>
                <div className={classes.root}>
                    <div id={'hello'} className={classes.container}>
                        <Hello />
                    </div>
                    <div id={'aboutMe'} className={classes.container}>
                        <AboutMe />
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
