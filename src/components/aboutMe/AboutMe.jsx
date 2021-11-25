import React from 'react';
import {makeStyles } from '@mui/styles';
import FadeInSection from "../fadeInSection";
import PP from "../../media/profilpic.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '20vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        "@media (max-width: 1150px)": {
            flexDirection: 'column',
            justifyContent: 'center',
        },

    },
    divider: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '3px',
        width: '65%',
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

        '&:hover' :{
            "& $image_box": {
                transform: 'translate(3px, 3px)'
            },
            "& $image": {
                transform: 'translate(-3px, -3px)'
            },
        },
    },
    image_box: {
        position: "absolute",
        top: 'calc(50% - 125px)',
        left: 'calc(50% - 125px)',
        height: '250px',
        width: '250px',
        borderRadius: '4px',
        border: '2px solid' + theme.palette.primary.main,
        transition: 'all 0.3s ease 0s',
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
        borderRadius: '4px',
        transition: 'all 0.3s ease 0s',
        "@media (max-width: 1150px)": {
            display: 'none'
        },
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
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
    description: {
        color: theme.palette.text.main,
        opacity: 0.75,
        fontSize: '1rem',
        marginTop: '30px',
        textAlign: "justify",
        "@media (max-width: 1150px)": {
            width: '100%',
        },
        "@media (max-width: 950px)": {
            width: '100%',
        },
        "@media (max-width: 800px)": {
            width: '100%',
            marginTop: '15px',
        }
    },
    highlighted: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    }
}));

function AboutMe() {
    const classes = useStyles();

    return (
        <>
                <div className={classes.root}>
                    <FadeInSection waitingTime={1500}>
                        <div className={classes.title}>
                            <span className={classes.number}>01. </ span>
                            <span className={classes.title_text}>About Me</ span>
                        </div>
                        <div className={classes.divider} />
                    </FadeInSection>
                    <FadeInSection waitingTime={1500}>
                        <div className={classes.container}>

                            <div className={classes.box}>
                                <div className={classes.description}>
                                    <p>Hey ! My name's Hugo De Grossi,  I'm basically <span className={classes.highlighted}>loving IT</span> and a lot of other things like cars, sport, and eating good meals (by the way that's why I do sport).</ p>
                                    <p>Currently living in a little town near Strasbourg (some friends call it a 'tribe') I've made my way to the IT field not only by studying <span className={classes.highlighted}>Computer Science / IT Engineering</span> at CESI Ecole d'Ingenieur, but also by <span className={classes.highlighted}>self-learning</span> and <span className={classes.highlighted}>continuously improving my skills</span>.</p>
                                    <p>I've had the opportunity to work for a <span className={classes.highlighted}>public company</span> but also for a <span className={classes.highlighted}>massive worldwide company</span>.</ p>
                                    <p>I really want to be  <span className={classes.highlighted}>confident</span> in my work, that's also why I love learning new things, new possibilities, new way to solve a problem, so I can be sure to do the best choice everytime it's needed.</ p>
                                    <p>I currently also work as a <span className={classes.highlighted}>Corporal</span> (Reservist) for the 1st Infantry Regiment in France (for more than three years), this give me a <span className={classes.highlighted}>sense of leadership</span>  , and a lot more confidence in myself and the others. (This part-time engagement <span className={classes.highlighted}>always pass after full-time work & study</span> )</ p>
                                </div>

                            </div>
                            <div className={classes.image_container}>
                                    <div className={classes.image_box} />
                                    <img className={classes.image} src={PP} alt={'Hugo De Grossi Profile Pic'}/>
                                    <div className={classes.image_over} />
                            </div>

                        </div>
                    </FadeInSection>



                </div>

        </>
    );
}

export default AboutMe;
