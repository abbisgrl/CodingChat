import { Avatar } from "@mui/material";
import React, { useEffect,useState } from "react";
import '../Css/SidebarChat.css';

const SidebarChat = ()=>{
    const [seed,setSeed] = useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    
    return(
        <div className="sideChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat;