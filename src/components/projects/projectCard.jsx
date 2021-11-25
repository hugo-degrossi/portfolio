import React from 'react';
import { makeStyles } from '@mui/styles';
import FadeInSection from "../fadeInSection";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "250px",
        border: "2px solid" + theme.palette.primary.main,
    },
}));

export default function ProjectCard() {
    const classes = useStyles();

    return (
        <>

            <FadeInSection waitingTime={1500}>
                <div className={classes.root}>

                </div>
            </FadeInSection>
        </>
    );
}

