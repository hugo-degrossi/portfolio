import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Box, Button, CircularProgress, styled, TextField} from "@mui/material";
import {makeStyles } from '@mui/styles';
import theme from "../../theme";
import {CustomTooltip} from "../utils/customComponents";
import {TaskAltRounded} from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    input: {
        margin: '10px 0',
    },
    label: {
        fontWeight: '600 !important'
    },
    form: {
        display: 'grid',
        gridGap: '12px'
    },
    center: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'right',
        width: '100%',
        height: '100%',
    },
    submit_btn: {
        fontWeight: "bold !important"
    },
    top_section: {
        marginBottom: '30px',
        '& ul':{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            '& li': {
                display: 'flex',
                alignItems: 'center',
                margin: '5px 0',
                backgroundColor: '#381e1e',
                padding: '5px',
                color: theme.palette.primary.main,
                fontWeight: '700',
                fontSize: '0.8rem',
                '& span': {
                    marginLeft: '20px',
                }
            }
        }
    },
    ul:{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            '& li': {
                display: 'flex',
                alignItems: 'center',
                margin: '2px 0',
                padding: '2px',
                fontWeight: '700',
                fontSize: '0.75rem',
            }

    },
    disabledButton: {
        borderColor: '#684737 !important',
        color: '#684737 !important'
    }

}));


const CssTextField = styled(TextField, theme)({
    '& .MuiOutlinedInput-root': {
        padding: '0',

        '& fieldset': {
            borderColor: 'transparent',
        },
        '&:hover fieldset': {
            borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '& input': {
            backgroundColor: '#381e1e', //theme.palette.primary.second
            color: theme.palette.primary.fourth,
            transition: 'all 0.2s',
            fontSize: '0.9rem',
            fontWeight: '600 !important'
        },
        '&:hover input': {
            color: theme.palette.primary.main,
        },
        '&.Mui-focused input': {
            color: theme.palette.primary.main,
        },

        '& textarea': {
            padding: '16.5px 14px',
            backgroundColor: '#381e1e', //theme.palette.primary.second
            color: theme.palette.primary.fourth,
            transition: 'all 0.2s',
            fontSize: '0.9rem',
            margin: 0,
            fontWeight: '600 !important'
        },
        '&:hover textarea': {
            color: theme.palette.primary.main,
        },
        '&.Mui-focused textarea': {
            color: theme.palette.primary.main,
        },
    },
});


export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);


export const ContactUs = () => {
    const classes = useStyles();
    const form = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_lw734ph', 'template_e9b4chs', form.current, 'user_6T2TFNfi8co3Cy5z7QAk0')
            .then((result) => {
                setStatus(true)
                setLoading(false)
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log(error.text);
                setStatus(false)
                setLoading(false)
            });
    };

    const handleNameChange = (e) => {setName(e.target.value)}
    const handleEmailChange = (e) => {setEmail(e.target.value)}
    const handleMessageChange = (e) => {setMessage(e.target.value)}

    return (
        <>

            <div className={classes.top_section}>
                <ul>
                    {status !== null && !status ? <li><TaskAltRounded /> <span>AN ERROR OCCURRED WHEN SENDING THE MESSAGE</span></li>: null}
                    {status !== null && status ? <li><TaskAltRounded /> <span>MESSAGE SENT, I WILL GET BACK TO YOU AS SOON AS POSSIBLE</span></li>: null}
                </ul>
            </div>
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <CssTextField label="Full Name" fullWidth name="user_name" value={name} onChange={handleNameChange}
                              InputLabelProps={{className: classes.label,}}
                />
                <CssTextField label="Email" fullWidth name="user_email" value={email} onChange={handleEmailChange}
                              InputLabelProps={{className: classes.label,}}
                />
                <CssTextField label="Message" fullWidth multiline rows={5} name="message" value={message} onChange={handleMessageChange}
                              InputLabelProps={{className: classes.label,}}
                />
                <div className={classes.center}>

                    <CustomTooltip title={
                        <ul className={classes.ul}>
                            {name === '' ? <li>- TO SUBMIT PLEASE WRITE YOUR NAME</li> : null}
                            {email === '' ? <li>- TO SUBMIT PLEASE WRITE YOUR EMAIL</li> : !validEmail.test(email) ? <li>- INVALID EMAIL</li> : null}
                            {message === '' ? <li>- TO SUBMIT PLEASE WRITE A MESSAGE</li> : null}
                            {message === '' || !validEmail.test(email) || email === '' || name === '' ? null : <li> SUBMIT </li>}
                        </ul>
                    } placement="right">
                    <Box sx={{ m: 1, position: 'relative' }}>
                        <Button className={classes.submit_btn} variant="outlined" type="submit" value="Send" disabled={loading || name === '' || email === '' || message === '' || !validEmail.test(email)} classes={{ disabled: classes.disabledButton }}>Submit</Button>
                    {loading &&  (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: '#dc9777',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                    </Box>
                    </CustomTooltip>
                </div>
            </form>
        </>


    );
};
