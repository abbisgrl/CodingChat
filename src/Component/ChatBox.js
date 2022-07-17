import { Avatar, IconButton } from "@mui/material";
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import db from '../firebase';
import '../Css/ChatBox.css';


const ChatBox = () => {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).
                onSnapshot((snapshot => (
                    setRoomName(snapshot.data().name)
                )))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    function sendMessage(e) {
        e.preventDefault();
        setInput('');
    }

    return (
        <div className="Chat">
            <div className="Chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="Chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="Chat_headerRight">
                    <IconButton>
                        <AttachFile fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <MoreVert fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined fontSize="small" />
                    </IconButton>
                </div>
            </div>

            <div className="Chat_body">
                <p className={`Chat_message  ${false && 'Chat_reciever'}`}>
                    <span className="Chat_name">
                        Gyanendra Shah
                    </span>
                    Hey guys
                    <span className="Chat_timestamp">
                        3:52 pm
                    </span>
                </p>
            </div>

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