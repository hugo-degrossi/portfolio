import React, {useState} from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import FadeInSection from "../fadeInSection";
import {DATA} from "../../data/data"
import PP from "../../media/profilpic.jpg"
import ReactLogo from "../../media/icons/react-original.svg";
import AngularLogo from "../../media/icons/angularjs-plain.svg";
import TypeScriptLogo from "../../media/icons/typescript-plain.svg";
import JavascriptLogo from "../../media/icons/javascript-plain.svg";
import PythonLogo from "../../media/icons/python-original.svg";
import DjangoLogo from "../../media/icons/django-plain.svg";
import SymfonyLogo from "../../media/icons/symfony-original.svg";
import RubyLogo from "../../media/icons/ruby-plain.svg";
import CLogo from "../../media/icons/c-plain.svg";
import CSharpLogo from "../../media/icons/csharp-plain.svg";
import JavaLogo from "../../media/icons/java-plain.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '20vh',
        "@media (max-width: 1150px)": {
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
    divider: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '3px',
        width: '95%',
        backgroundColor: theme.palette.primary.main,
        opacity: '0.1',
        marginTop: '5px',
        "@media (max-width: 1150px)": {
            width: '100%',
        },
    },
    box: {
        flexBasis: '55%',
        "@media (max-width: 1150px)": {
            flexBasis: '100%',
        },
    },
    image_container: {
        position: "relative",
        flexBasis: '30%',
        margin: '20px',
        "@media (max-width: 1150px)": {
            flexBasis: '100%',
        },

    },
    image_box: {
        position: "absolute",
        top: 'calc(50% - 125px)',
        left: 'calc(50% - 125px)',
        height: '250px',
        width: '250px',
        border: '2px solid' + theme.palette.primary.main,
        "@media (max-width: 1150px)": {
            display: 'none'
        },
    },
    image_over: {
        position: "absolute",
        top: 'calc(50% - 110px)',
        left: 'calc(50% - 110px)',
        height: '250px',
        width: '250px',
        opacity: 0.3,
        transition: 'all 0.3s ease 0s',
        backgroundColor: theme.palette.primary.main,
        '&:hover' :{
            opacity: 0,
        },
        "@media (max-width: 1150px)": {
            display: 'none'
        },

    },
    image: {
        position: "absolute",
        top: 'calc(50% - 110px)',
        left: 'calc(50% - 110px)',
        height: '250px',
        width: '250px',
        transition: 'all 0.3s ease 0s',
        "@media (max-width: 1150px)": {
            display: 'none'
        },
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
            marginRight: '10px',
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
        opacity: 0.75,
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
    },
    highlighted: {
        color: theme.palette.primary.vibrant,
        fontWeight: "bold"
    }
}));

function AboutMe() {
    const classes = useStyles();

    return (
        <>
            <FadeInSection waitingTime={1500}>
                <div className={classes.root}>
                    <div className={classes.box}>
                        <div className={classes.title}>
                            <span className={classes.number}>01. </ span>
                            <span className={classes.title_text}>About Me</ span>
                        </div>
                        <div className={classes.divider} />
                        <div className={classes.description}>
                            <p>Hey ! My name's Hugo De Grossi,  I'm basically <span className={classes.highlighted}>loving IT</span> and a lot of other things like cars, sport, and eating good meals (by the way that's why I do sport).</ p>
                            <p>Currently living in a little town near Strasbourg (some friends call it a 'tribe') I've made my way to the IT field by not only studying <span className={classes.highlighted}>Computer Science / IT Engineering</span> at CESI Ecole d'Ingenieur, but also by <span className={classes.highlighted}>self-learning</span> and <span className={classes.highlighted}>continuously improving my skills</span>.</p>
                            <p>I've had the opportunity to work for a <span className={classes.highlighted}>public company</span> but also for a <span className={classes.highlighted}>massive worldwide company</span>.</ p>
                            <p>I really want to be  <span className={classes.highlighted}>confident</span> in my work, that's also why I love learning new things, new possibilities, new way to solve a problem, so I can be sure to do the best choice everytime it's needed.</ p>
                            <p>I currently also work as a <span className={classes.highlighted}>Corporal</span> (Reservist) for the 1st Infantry Regiment in France (for more than three years), this give me a <span className={classes.highlighted}>sense of leadership</span>  , and a lot more confidence in myself and the others. (This part-time engagement <span className={classes.highlighted}>always pass after full-time work & study</span> )</ p>
                        </div>

                    </div>
                    <div className={classes.image_container}>
                        <div className={classes.image_box}>

                        </div>
                        <img className={classes.image} src={PP} alt={'profile pic'}/>

                        <div className={classes.image_over}>

                        </div>
                    </div>


                </div>

            </FadeInSection>
        </>
    );
}

export default AboutMe;
