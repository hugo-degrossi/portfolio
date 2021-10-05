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
        "@media (max-width: 1150px)": {
            width: '100%',
            marginLeft: '0'
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
        },
        "@media (max-width: 800px)": {
            width: '100%',
            marginTop: '15px',
        }
    },
    tab_container: {
        marginTop: '15px',
    },
    highlighted: {
        color: theme.palette.primary.vibrant,
        fontWeight: "bold"
    },
    tab_name: {
        fontFamily: 'Segoe UI !important',
        alignItems: "end !important",
        fontSize: '1rem !important'
    },
    tab_content: {
        color: theme.palette.text.main + '!important',
        fontFamily: 'Segoe UI !important',
        opacity: '0.7 !important',
        padding: '0 !important',
        marginRight: '40px !important',
        maxWidth: '50% !important'
    },
    tab_content_title: {
        color: theme.palette.primary.vibrant + '!important',
        opacity: '1 !important',
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: '2px',
        textAlign: "end"
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
                        <div className={classes.tab_container}>
                            <Box
                                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end',}}
                            >
                                <Tabs
                                    orientation="vertical"
                                    value={value}
                                    onChange={handleChange}
                                    sx={{ borderRight: 1, border: 'none', order: '2', display: 'flex', justifyContent: 'flex-end' }}

                                >
                                    <Tab className={classes.tab_name} label="Toyota motor europe" {...a11yProps(0)} />
                                    <Tab className={classes.tab_name} label="INSA Strasbourg" {...a11yProps(1)} />
                                    <Tab className={classes.tab_name} label="French Army" {...a11yProps(2)} />
                                </Tabs>
                                <TabPanel className={classes.tab_content} value={value} index={0}>
                                    <p className={classes.tab_content_title}>PROJECT MANAGER & DEVELOPER</p>
                                    Toyota goes vroum vroum
                                    <p className={classes.tab_content_title}>REFERENCES</p>
                                </TabPanel>
                                <TabPanel className={classes.tab_content} value={value} index={1}>
                                    <p className={classes.tab_content_title}>FULL STACK DEVELOPER</p>
                                    Design and develop a Intelligent Research / Deposit App for the Nuxeo DMS (Document Management System) using Django, the Nuxeo API, React, and PostgreSQL from scratch.<br/><br/>
                                    Design and develop a Blog / Wiki App using Django, React, and PostgreSQL from scratch.
                                    <p className={classes.tab_content_title}>REFERENCES</p>
                                </TabPanel>
                                <TabPanel className={classes.tab_content} value={value} index={2}>
                                    <p className={classes.tab_content_title}>CORPORAL</p>
                                    Currently Corporal at the 1st Infantry Regiment in Sarrebourg, I am leading 2 soldier, I'm in pass to  become Sergeant and lead a combat group of 8 soldier.
                                </TabPanel>
                            </Box>
                        </div>
                </div>

            </FadeInSection>
        </>
    );
}

export default Experience;
