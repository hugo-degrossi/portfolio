import React from 'react';
import { makeStyles } from '@mui/styles';
import LinkIcon from "@mui/icons-material/Link";
import {Button} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {CustomTooltip} from "../utils/customComponents";


const useStyles = makeStyles((theme) => ({
    project_card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: "4px",
        position: "relative",
        backgroundColor: "#381E1E",
        minHeight: "180px",
        boxShadow: '0 1px 3px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.7)',
        '&:hover': {
            "& $image_box": {
                transform: "rotate(2deg)",

            },
            "& $bg_box_1": {
                transform: "rotate(4deg)",
            },
            "& $bg_box_2": {
                transform: "rotate(8deg)",
            },
            "& $bg_box_3": {
                transform: "rotate(12deg)",
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
    fab:{
        position: "absolute !important",
        zIndex: 3,
        bottom: '-10px',
        left: '150px',
        backgroundColor: theme.palette.primary.main,
        "@media (max-width: 2250px)": {
            left: "140px",
        },
        "@media (max-width: 1850px)": {
            left: "130px",
        },
        "@media (max-width: 1450px)": {
            left: "120px",
        },
        "@media (max-width: 1150px)": {
            left: "110px",
        },
        "@media (max-width: 950px)": {
            display: "none !important"
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
    bg_box_1:{
        opacity: 0.2,
        position: "absolute",
        borderRadius: "6px",
        transition: "all 0.3s",
        backgroundColor: theme.palette.primary.main,
        top: "20px",
        left: "-20px",
        width: "200px",
        aspectRatio: "1",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        color: theme.palette.info.main,
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
    bg_box_2:{
        opacity: 0.2,
        position: "absolute",
        borderRadius: "6px",
        transition: "all 0.3s",
        backgroundColor: theme.palette.primary.main,
        top: "20px",
        left: "-20px",
        width: "196px",
        aspectRatio: "1",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        color: theme.palette.info.main,
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

    bg_box_3:{
        opacity: 0.2,
        position: "absolute",
        borderRadius: "6px",
        transition: "all 0.3s",
        backgroundColor: theme.palette.primary.main,
        top: "20px",
        left: "-20px",
        width: "196px",
        aspectRatio: "1",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        color: theme.palette.info.main,
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
        paddingLeft: '10px',
        color: theme.palette.text.main,
        opacity: 0.75,
        fontSize: '1rem',
        "@media (max-width: 1150px)": {
            width: '100%',
        },
        "@media (max-width: 950px)": {
            width: '100%',
        },
        "@media (max-width: 800px)": {
            width: '100%',
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
    },
    btn2: {
        fontFamily: 'Montserrat !important',
        fontWeight: "bold !important",
        marginRight: '15px !important',
    },
    highlighted: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    }
}));


export default function ProjectCard({image, name, desc, git, web}) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.project_card}>
                <div className={classes.image_box} style={{backgroundImage: `url(${image})`}}/>
                <div className={classes.bg_box_1}/>
                <div className={classes.bg_box_2}/>
                <div className={classes.bg_box_3}/>
                <div className={classes.placeholder} />
                <div className={classes.card_content}>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.description}>{desc}</div>

                    <div className={classes.actions}>
                        <CustomTooltip title="Check the source-code!" placement="top">
                            <Button className={classes.btn2} onClick={() => {window.open(git, "_blank")}} variant="outlined">
                                <GitHubIcon />
                            </Button>
                        </CustomTooltip>
                        <CustomTooltip title="Go to the project!" placement="top">
                            <Button className={classes.btn1} onClick={() => {window.open(web, "_blank")}} variant="contained">
                                <LinkIcon />
                            </Button>
                        </CustomTooltip>
                    </div>

                </div>
            </div>
        </>
    );
}

