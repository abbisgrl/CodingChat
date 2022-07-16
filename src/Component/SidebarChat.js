import { Avatar } from "@mui/material";
import React, { useEffect,useState } from "react";
import '../Css/SidebarChat.css';

const SidebarChat = ({id,name,addNewChat})=>{
    const [seed,setSeed] = useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    
    const createChat =()=>{
        const roomName = prompt("Please enter name for chat");
        if(roomName){

        }
    };
    return !addNewChat ?( 
        <div className="sideChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>last message...</p>
            </div>
        </div>
    ):(
        <div onClick = {createChat}
        className="sideChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat;