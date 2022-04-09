import React from 'react';
import {makeStyles } from '@mui/styles';
import FadeInSection from "../fadeInSection";
import portfolio from "../../media/portfolio.svg";
import chatbot from "../../media/icons/chatbot.svg";
import ProjectCard from "./projectCard";


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '20vh',
    },
    divider: {
        display: 'flex',
        justifyContent: 'flex-end',
        height: '3px',
        width: '65%',
        backgroundColor: theme.palette.primary.main,
        opacity: '0.1',
        marginTop: '5px',
        marginBottom: '30px',
        "@media (max-width: 1150px)": {
            width: '100%',
        },
        "@media (max-width: 800px)": {
            marginBottom: '15px',
        }
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
        fontFamily: "Consolas",
        fontWeight: 'bold',
        marginRight: '4px',
        "@media (max-width: 1450px)": {
            fontSize: '1.4rem',
        },
        "@media (max-width: 1150px)": {
            fontSize: '1.3rem',
            marginRight: '10px',
        },
        "@media (max-width: 950px)": {
            fontSize: '1.2rem',
        },
    },
    projects: {
        display: "grid",
        gridTemplateRows: "1fr",
        gridGap: "20px",
        marginTop: "30px",
        "@media (max-width: 1150px)": {
            gridGap: "20px",
        },
        "@media (max-width: 950px)": {
            gridGap: "15px",
        },
        "@media (max-width: 800px)": {
            gridGap: "10px",
        }
    },
    highlighted: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    }
}));

export default function Projects() {
    const classes = useStyles();
    return (
        <>
                <div className={classes.root}>
                    <FadeInSection waitingTime={1500}>
                    <div className={classes.title}>
                        <span className={classes.number}>02. </ span>
                        <span className={classes.title_text}>Projects</ span>
                    </div>
                    <div className={classes.divider} />
                    </FadeInSection>

                    <div className={classes.projects}>
                        <FadeInSection waitingTime={1500}>
                            <ProjectCard
                                image={chatbot}
                                name={"Chatbot"}
                                desc={<>A personal <span className={classes.highlighted}>RESTful API</span> developed with <span className={classes.highlighted}>Python</span>, <span className={classes.highlighted}>SpaCy</span> and <span className={classes.highlighted}>FastAPI</span> using <span className={classes.highlighted}>CI/CD</span> with <span className={classes.highlighted}>GitHub</span> and <span className={classes.highlighted}>Heroku</span>.</>}
                                git={"https://github.com/hugo-degrossi/personal-chatbot"}
                                web={""}
                            />
                        </FadeInSection>
                        <FadeInSection waitingTime={1500}>
                            <ProjectCard
                                image={portfolio}
                                name={"Personal Portfolio"}
                                desc={<>My personal portfolio developed with <span className={classes.highlighted}>React</span> using <span className={classes.highlighted}>CI/CD</span> with <span className={classes.highlighted}>GitHub</span> and <span className={classes.highlighted}>Cloudflare Pages</span>.</>}
                                git={"https://github.com/hugo-degrossi/portfolio"}
                                web={"https://hugo-degrossi.fr/"}
                            />
                        </FadeInSection>
                    </div>

                </div>
        </>
    );
}

