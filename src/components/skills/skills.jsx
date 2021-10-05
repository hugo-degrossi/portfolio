import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import FadeInSection from "../fadeInSection";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '20vh',
        width: '100%',
        padding: 0,
        "@media (max-width: 1150px)": {
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
    container: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    box: {
        width: '100%',
    },
    title: {
        marginBottom: '2px',
        display: 'flex',
        alignItems: "end",
        justifyContent: 'center'
    },
    divider: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '3px',
        width: '95%',
        backgroundColor: theme.palette.primary.main,
        opacity: '0.1',
        marginTop: '5px',
        marginBottom: '15px',
        "@media (max-width: 1150px)": {
            width: '100%',
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
    list_container: {
        display: "flex",
        flexDirection: "column",
        flexBasis: '30%'
    },
    list_title: {
        color: theme.palette.primary.vibrant + '!important',
        opacity: '0.7 !important',
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: '2px',
        marginBottom: '15px'
    },
    list: {
        padding: 0,
        margin: 0
    },
    list_item: {
        color: theme.palette.text.main + '!important',
        opacity: '0.7 !important',
        letterSpacing: '1px',
        listStyle: "none",
        marginBottom: '2px',
    },
    list_item_title: {
        color: theme.palette.primary.vibrant + '!important',
        opacity: '0.4 !important',
        letterSpacing: '1px',
        listStyle: "none",
        margin: '5px 0 5px 0',
        fontWeight: 'bold',
    }
}));

function Skills() {
    const classes = useStyles();

    return (
        <FadeInSection waitingTime={1500}>
            <div className={classes.root}>
                <div className={classes.box}>
                    <div className={classes.title}>
                        <span className={classes.number}>03. </ span>
                        <span className={classes.title_text}>Skills</ span>
                    </div>
                    <div className={classes.divider} />

                    <div className={classes.container}>
                        <div className={classes.list_container}>
                            <div className={classes.list_title}>LANGUAGES</div>
                            <ul className={classes.list}>
                                <li className={classes.list_item}>Javascript</li>
                                <li className={classes.list_item}>NodeJS</li>
                                <li className={classes.list_item}>Python</li>
                                <li className={classes.list_item}>Java</li>
                                <li className={classes.list_item}>C#</li>
                                <li className={classes.list_item}>C</li>
                            </ul>
                        </div>
                        <div className={classes.list_container}>
                            <div className={classes.list_title}>FRAMEWORK</div>
                            <ul className={classes.list}>
                                <li className={classes.list_item_title}>FRONTEND</li>
                                <li className={classes.list_item}>React</li>
                                <li className={classes.list_item}>Angular</li>
                                <li className={classes.list_item_title}>BACKEND</li>
                                <li className={classes.list_item}>Spring Boot</li>
                                <li className={classes.list_item}>Django</li>
                                <li className={classes.list_item}>Symfony</li>
                            </ul>
                        </div>

                        <div className={classes.list_container}>
                            <div className={classes.list_title}>DATABASE</div>
                            <ul className={classes.list}>
                                <li className={classes.list_item}>PostgreSQL</li>
                                <li className={classes.list_item}>MongoDB</li>
                                <li className={classes.list_item}>Oracle</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </FadeInSection>

    );
}

export default Skills;
