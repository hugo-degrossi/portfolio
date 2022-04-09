import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import FadeInSection from "../../components/fadeInSection";
import Fab from '@mui/material/Fab';
import {ForumRounded, CloseRounded} from '@mui/icons-material';
import { Card, LinearProgress } from '@mui/material';
import { CssTextField } from '../utils/CssTextField';
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    container:{
        position: 'fixed',
        right: '50px',
        bottom: '50px',
        height: '40%',
        minHeight: '400px',
        minWidth: '300px',
        width: '15%',
        padding: '10px',
        borderRadius: '20px !important',
        backgroundColor: theme.palette.background.second + ' !important',

        "@media (max-width: 900px)": {
            width: '70%',
            height: '60%',
            right: '5%',
            bottom: '5%',
        },
    },
    button_container:{
        position: 'fixed',
        right: '50px',
        bottom: '50px',
    },
    label: {
        fontWeight: '600 !important'
    },
    close_button: {
        position: 'absolute',
        left: '10px',
        top: '10px',
        zIndex: '1'
    },
    grid: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        height: "calc(100% - 50px)"
    },
    chat: {
        display: 'flex',
        marginBottom: '20px',
        flexDirection: 'column',
        justifyContent: 'end',
        height: '80%',
        maskImage: "linear-gradient(to bottom,rgba(0, 0, 0, 0) 10px,rgba(0, 0, 0, 1) 40%);"
    },
    user_chat:{
        position: 'relative',
        marginTop: '25px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'end',
        color:  theme.palette.primary.fourth,
        backgroundColor: theme.palette.background.default,
        borderRight: '3px solid !important',
        borderRightColor: theme.palette.primary.main,
    },
    chatbot_chat:{
        position: 'relative',
        marginTop: '25px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'start',
        color:  theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
        borderLeft: '3px solid !important',
        borderLeftColor: theme.palette.primary.main
    },
    sender:{
        fontSize: '0.9rem',
        fontWeight: 'bold',
        position: 'absolute',
        top: '-19px',
    },
    progess:{
        backgroundColor: 'transparent !important'
    }
}));

function Chatbot() {
    const classes = useStyles();

    const [isActive, setIsActive] = useState(false)
    const [isFirstLoad, setIsFirstLoad] = useState(true)
    const [textField, setTextField] = useState("")
    const [chatBotChatting, setChatBotChatting] = useState(false)
    const [messages, setMessages] = useState([])

    const handleActiveChange = () => {
        setIsFirstLoad(false)
        setIsActive(!isActive)
    }
    const handleTextChange = (e) => {setTextField(e.target.value)}

    const handleKeyPress = (e) => {
        if (e.keyCode === 13 || e.charCode === 13) {
            let newMessage = textField
            setTextField("")
            setMessages([...messages, {'sender': 'you','message': newMessage}])
            chatbotCall(newMessage)

        }
    }

    const chatbotCall = (msg) => {

        setTimeout(async () => {
            setChatBotChatting(true)
            let answer = "Sorry, I couldn't answer."
            await fetch(API_URL, {
                method: 'GET',
                headers: {
                    "MESSAGE-TEXT": msg.toLowerCase(),
                    "Access-Control-Allow-Origin": '*'
                }
            })
            .then((response) => {
                const jsonPromise = response.json()
                jsonPromise.then(value => {
                    answer = value['answer']
                    setMessages([...messages, {'sender': 'you','message': msg}, {'sender': 'chatbot','message': answer}])
                })
            })
            .catch(function() {
                setMessages([...messages, {'sender': 'you','message': msg}, {'sender': 'chatbot','message': answer}])
            
            });

            setChatBotChatting(false)
        }, 1);

    }


    return (
        <>
            {isActive 
                ? (<Card className={classes.container}>


                    <Fab color='primary' size='small' onClick={handleActiveChange} className={classes.close_button}>
                        <CloseRounded />
                    </Fab>
                    <div className={classes.grid}>
                        <div className={classes.chat}>
                            {messages.map((message, index) => (
                            <div key={index} className={message['sender'] === 'you' ? [classes.user_chat,] :  [classes.chatbot_chat]}>
                                <div className={classes.sender}>{message['sender']}</ div>
                                {message['message']}
                            </ div>
                            ))
                                
                            }
                        </ div>

                        {chatBotChatting 
                            ? <div className={classes.chatbot_chat}>
                                <div className={classes.sender}>chatbot</ div>
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress color='primary' className={classes.progess}/>
                                </Box>      
                            </ div>

                            : null
                        }
                  
                                
                        <CssTextField label="Write your message" fullWidth name="user_name" value={textField} onChange={handleTextChange} onKeyPress={handleKeyPress}
                                    InputLabelProps={{className: classes.label,}}
                        />
                    </ div>



                </Card>)
                : (
                    <div className={classes.button_container}>
                    {isFirstLoad
                        ? <FadeInSection waitingTime={3000}>
                        <Fab color='primary' size='medium' onClick={handleActiveChange}>
                            <ForumRounded />
                        </Fab>
                    </ FadeInSection>
                        : <Fab color='primary' size='medium' onClick={handleActiveChange}>
                            <ForumRounded />
                        </Fab>
                    }
                </div>)
            }
        </>
    );
}

export default Chatbot;


const API_URL = "https://hugodegrossi-chatbot.herokuapp.com/message/"