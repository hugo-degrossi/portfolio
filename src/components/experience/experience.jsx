import React, {useState} from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import FadeInSection from "../fadeInSection";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box, Typography} from "@mui/material";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: '20vh',
    },
    title: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: "end",
        marginBottom: '2px',
        "@media (max-width: 1150px)": {
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
        marginLeft: '35%',
        marginTop: '5px',
        marginBottom: '30px',
        "@media (max-width: 1150px)": {
            width: '100%',
            marginLeft: '0'
        },
        "@media (max-width: 800px)": {
            marginBottom: '15px',
        }
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
        marginRight: '10px',
        "@media (max-width: 1450px)": {
            fontSize: '1.3rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '1.2rem',
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
            fontSize: '0.9rem',
        },
        "@media (max-width: 800px)": {
            width: '100%',
            marginTop: '15px',
        }
    },
    head_exp_right: {
        marginTop: "30px",
        display: "flex",
        justifyContent: "end",
        flexDirection: "column",
        textAlign: "right",
        width: "100%",
    },
    head_exp_left: {
        marginTop: "30px",

    },
    head_exp_left_title:{
        color: theme.palette.text.main,
        fontSize: '1.3rem',
        fontWeight: "bold",
        letterSpacing: 0,
        marginBottom: '10px',
        padding: '4px',
        opacity: 0.9,

        "@media (max-width: 1150px)": {
            fontSize: '1.2rem',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.1rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '1rem',
        }

    },
    head_exp_left_divider:{
        height: '3px',
        width: "75%",
        backgroundColor: theme.palette.primary.main,
        opacity: 0.2,
    },
    job_title:{
        color: theme.palette.primary.main,
        fontSize: '1.1rem',
        fontWeight: "bold",
        opacity: 0.7,

        "@media (max-width: 950px)": {
            fontSize: '1rem',
        },
        "@media (max-width: 800px)": {
            fontSize: '0.9rem',
        }
    },
    stack_left:{
        width: '60%',
        marginTop: "20px",
        display: "flex",
        justifyContent: 'start',
        flexWrap: 'wrap'
    },
    stack:{
        width: '60%',
        marginTop: "20px",
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'end',

        "@media (max-width: 1150px)": {
            width: '60%',
            justifyContent: 'start',
        },
    },
    stack_right:{
        width: '100%',
        marginTop: "20px",
        display: "flex",
        justifyContent: 'end',
        flexWrap: 'wrap',

        "@media (max-width: 1150px)": {
            justifyContent: 'start',
        },
    },
    chip: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
        padding: "2px 10px 3px 10px",
        marginRight: "5px",
        marginLeft: "5px",
        marginTop: "10px",
        fontSize: '0.9rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                    <p >{children}</p>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function Experience() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <FadeInSection waitingTime={1500}>
                <div className={classes.root}>
                        <div className={classes.title}>
                            <span className={classes.number}>02. </ span>
                            <span className={classes.title_text}>Work Experience</ span>
                        </div>
                        <div className={classes.divider} />

                        <div className={classes.head_exp_left}>
                            <div className={classes.head_exp_left_title}>[2021-2022] PROJECT MANAGER & DEVELOPER</div>
                            <div className={classes.job_title}>TOYOTA MOTOR EUROPE</div>
                            <div className={classes.description}>Ceci est une description</div>
                        </div>

                        <div className={classes.head_exp_right}>
                            <div className={classes.head_exp_left_title}>[2021-2022] PROJECT MANAGER & DEVELOPER</div>
                            <div className={classes.job_title}>INSA STRASBOURG</div>
                            <div className={classes.description}>Ceci est une description</div>
                        </div>

                    <div className={classes.head_exp_left}>
                        <div className={classes.head_exp_left_title}>[2021-2022] PROJECT MANAGER & DEVELOPER</div>
                        <div className={classes.job_title}>TOYOTA MOTOR EUROPE</div>
                        <div className={classes.description}>Ceci est une description</div>
                    </div>
                </div>

            </FadeInSection>
        </>
    );
}

export default Experience;
