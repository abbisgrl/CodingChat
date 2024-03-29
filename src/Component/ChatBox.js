import { Avatar, IconButton } from "@mui/material";
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import db from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import '../Css/ChatBox.css';
import { useStateValue } from "../Context/StateProvider";


const ChatBox = () => {
    //various hooks and context hooks 
    //seed for random avatar seeding ,input for the message setting,room id for taking 
    //room id from url,room name hook for setting the room name taking from firebase ,
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    
    //useEffect for setting the room name according to the room id and fetching all message
    //from firebase to show in the chatbox in ascending order wrt to timestamp
    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName
                    (snapshot.data().name));

            db.collection('rooms').doc(roomId)
                .collection('messages').orderBy
                ('timestamp', 'asc').onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => doc.data()))
                ))
        }
    }, [roomId]);

    //for seeding random avatar for different room
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    //when some one send message this function will call
    function sendMessage(e) {
        e.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages')
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        setInput('');

    }

    return (
        <div className="Chat">
            {/* Dividing into three parts chat header ,chat body and chat footer
            in chat header we will see the room name,last seen time and all necessary icons 
            .I did not any functinality to the icons they are dummy */}

            {/* Chat header */}
            <div className="Chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="Chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.
                                timestamp?.toDate()
                        ).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</p>
                </div>
                {/* right side icons in chat header */}
                <div className="Chat_headerRight">
                    <IconButton>
                        <AttachFile fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton>
                        <MoreVert fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined fontSize="small" color="primary" />
                    </IconButton>
                </div>
            </div>

                {/* Chat body and when message name=== userdisplay name then the user message will show
                at right side */}
            <div className="Chat_body">
                {messages.map((message) => (
                    <p className={`Chat_message  ${message.name === user.displayName && 'Chat_reciever'}`}>
                        <span className="Chat_name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="Chat_timestamp">
                            {new Date(message.timestamp?.toDate()).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
                        </span>
                    </p>
                ))}


            </div>

                    {/* chat footer .Only input form is working and other icons are just dummy */}
            <div className="Chat_footer">
                <EmojiEmotionsIcon />
                <form action="">
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <button onClick={sendMessage}>Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default ChatBox;