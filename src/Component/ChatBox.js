import { Avatar, IconButton } from "@mui/material";
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from "react";
import '../Css/ChatBox.css'


const ChatBox = () => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    return (
        <div className="Chat">
            <div className="Chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="Chat_headerInfo">
                    <h3>Room name</h3>
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

            </div>
        </div>
    );
};

export default ChatBox;