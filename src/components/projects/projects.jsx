import React from 'react';
import {makeStyles } from '@mui/styles';
import {Button, tooltipClasses} from "@mui/material";
import FadeInSection from "../fadeInSection";
import GitHubIcon from '@mui/icons-material/GitHub';
import portfolio from "../../media/portfolio.png";
import starRunner from "../../media/star-runner.png";
import LinkIcon from '@mui/icons-material/Link';
import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";

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
    projects: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "35px",
        marginTop: "50px"
    },
    projects_container: {
        display: "flex",
        flexDirection: "column",
    },
    project_card: {
        display: "flex",
        flexDirection: "row",
        marginBottom: '40px',
        justifyContent: "space-between",
        width: "100%",
        borderRadius: "4px",
        position: "relative",
        backgroundColor: "#381E1E",
        minHeight: "180px",
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
        '&:hover': {
            "& $image_box": {
                transform: "rotate(4deg)",

            },
            "& $box": {
                transform: "rotate(4deg)",
                opacity: 0.4
            },
        }
    },
    placeholder: {
        width: "200px",
        aspectRatio: "1",


        "@media (max-width: 2250px)": {
            width: "190px",
        },
        "@media (max-width: 1850px)": {
            width: "180px",
        },
        "@media (max-width: 1450px)": {
            width: "170px",
        },
        "@media (max-width: 1150px)": {
            width: "150px",
        },
        "@media (max-width: 950px)": {
            display: "none"
        },
    },
    image_box: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "absolute",
        borderRadius: "4px",
        transition: "all 0.3s",
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
        top: "20px",
        left: "-20px",
        width: "200px",
        aspectRatio: "1",
        zIndex: 2,

        "@media (max-width: 2250px)": {
            width: "190px",
        },
        "@media (max-width: 1850px)": {
            width: "180px",
        },
        "@media (max-width: 1450px)": {
            width: "170px",
        },
        "@media (max-width: 1150px)": {
            width: "150px",
        },
        "@media (max-width: 950px)": {
            display: "none"
        },
    },
    box: {
        position: "absolute",
        borderRadius: "4px",
        transition: "all 0.3s",
        backgroundColor: theme.palette.primary.main,
        top: "20px",
        left: "-20px",
        width: "200px",
        aspectRatio: "1",
        opacity: 0,
        zIndex: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        color: theme.palette.info.main,
        '&:hover' : {
            cursor: 'pointer',
            opacity: 0.7 + ' !important'
        },


        "@media (max-width: 2250px)": {
            width: "190px",
        },
        "@media (max-width: 1850px)": {
            width: "180px",
        },
        "@media (max-width: 1450px)": {
            width: "170px",
        },
        "@media (max-width: 1150px)": {
            width: "150px",
        },
        "@media (max-width: 950px)": {
            display: "none"
        },
    },
    card_content: {
        padding: "20px",
        width: '80%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        "@media (max-width: 950px)": {
            width: '100%',
        },
    },
    name: {
        fontWeight: "bold",
        fontSize: "1.1rem",
        color: theme.palette.primary.main,
    },
    description: {
        marginTop: "10px",
        paddingLeft: '10px',
        color: theme.palette.text.main,
        opacity: 0.75,
        fontSize: '1rem',
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
    actions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",

    },
    btn1: {
        fontFamily: 'Montserrat !important',
        fontWeight: "bold !important",
        display:'none !important',
        marginRight: '15px !important',
        "@media (max-width: 950px)": {
            display:'flex !important',
            alignItems: 'center !important',
        },
    },
    btn2: {
        fontFamily: 'Montserrat !important',
        fontWeight: "bold !important"
    },
    highlighted: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    }
}));
const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#DC9777",
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontFamily: 'Montserrat',
        fontSize: 13,
        fontWeight: "bold"
    },
}));
export default function Projects() {
    const classes = useStyles();
    //<LinkIcon fontSize={"large"} color={"info"}/>
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

                    <div className={classes.projects_container}>
                        <FadeInSection waitingTime={1500}>
                            <div className={classes.project_card}>
                                <div className={classes.image_box} style={{backgroundImage: `url(${starRunner})`}}/>
                                <CustomTooltip title="Looks like you're already here ;)" placement="top">
                                    <div className={classes.box}>
                                        <LinkIcon fontSize={"large"} color={"info"}/>
                                    </div>
                                </CustomTooltip>
                                <div className={classes.placeholder} />
                                <div className={classes.card_content}>
                                    <div className={classes.name}>Personal Portfolio</div>
                                    <div className={classes.description}>My personal portfolio developed using <span className={classes.highlighted}>React</span> & <span className={classes.highlighted}>Continuous Development</span>.</div>

                                    <div className={classes.actions}>
                                        <Button className={classes.btn1} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="contained">
                                            <LinkIcon />
                                        </Button>
                                        <CustomTooltip title="Check on GitHub" placement="top">
                                            <Button className={classes.btn2} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="outlined">
                                                <GitHubIcon />
                                            </Button>
                                        </CustomTooltip>
                                    </div>

                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection waitingTime={1500}>
                            <div className={classes.project_card}>
                                <div className={classes.image_box} style={{backgroundImage: `url(${starRunner})`}}/>
                                <CustomTooltip title="Looks like you're already here ;)" placement="top">
                                    <div className={classes.box}>
                                        <LinkIcon fontSize={"large"} color={"info"}/>
                                    </div>
                                </CustomTooltip>
                                <div className={classes.placeholder} />
                                <div className={classes.card_content}>
                                    <div className={classes.name}>Personal Portfolio</div>
                                    <div className={classes.description}>My personal portfolio developed using <span className={classes.highlighted}>React</span>.</div>

                                    <div className={classes.actions}>
                                        <Button className={classes.btn1} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="contained">
                                            <LinkIcon />
                                        </Button>
                                        <CustomTooltip title="Check on GitHub" placement="top">
                                            <Button className={classes.btn2} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="outlined">
                                                <GitHubIcon />
                                            </Button>
                                        </CustomTooltip>
                                    </div>

                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection waitingTime={1500}>
                            <div className={classes.project_card}>
                                <div className={classes.image_box} style={{backgroundImage: `url(${portfolio})`}}/>
                                <CustomTooltip title="Looks like you're already here ;)" placement="top">
                                    <div className={classes.box}>
                                        <LinkIcon fontSize={"large"} color={"info"}/>
                                    </div>
                                </CustomTooltip>
                                <div className={classes.placeholder} />
                                <div className={classes.card_content}>
                                    <div className={classes.name}>Personal Portfolio</div>
                                    <div className={classes.description}>My personal portfolio developed using <span className={classes.highlighted}>React</span>.</div>

                                    <div className={classes.actions}>
                                        <Button className={classes.btn1} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="contained">
                                            <LinkIcon />
                                        </Button>
                                        <CustomTooltip title="Check on GitHub" placement="top">
                                            <Button className={classes.btn2} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="outlined">
                                                <GitHubIcon />
                                            </Button>
                                        </CustomTooltip>
                                    </div>

                                </div>
                            </div>
                        </FadeInSection>
                        <FadeInSection waitingTime={1500}>
                            <div className={classes.project_card}>
                                <div className={classes.image_box} style={{backgroundImage: `url(${portfolio})`}}/>
                                <CustomTooltip title="Looks like you're already here ;)" placement="top">
                                    <div className={classes.box}>
                                        <LinkIcon fontSize={"large"} color={"info"}/>
                                    </div>
                                </CustomTooltip>
                                <div className={classes.placeholder} />
                                <div className={classes.card_content}>
                                    <div className={classes.name}>Personal Portfolio</div>
                                    <div className={classes.description}>My personal portfolio developed using <span className={classes.highlighted}>React</span>.</div>

                                    <div className={classes.actions}>
                                        <Button className={classes.btn1} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="contained">
                                            <LinkIcon />
                                        </Button>
                                        <CustomTooltip title="Check on GitHub" placement="top">
                                            <Button className={classes.btn2} onClick={() => {window.open("https://github.com/hugo-degrossi/portfolio", "_blank")}} variant="outlined">
                                                <GitHubIcon />
                                            </Button>
                                        </CustomTooltip>
                                    </div>

                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                </div>
        </>
    );
}

