import { React, useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../Css/Sidebar.css';
import SidebarChat from "./SidebarChat";
import db from '../firebase';

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data:doc.data(),
            })))
        ))
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="header_right">
                    <IconButton>
                        <DonutLargeIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon fontSize="small" />
                    </IconButton>

                </div>
            </div>
            <div className="search_box">
                <div className="search_boxContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new conversation" type='text' />
                </div>

            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                {rooms.map((room)=>(
                    <SidebarChat key={room.id} 
                    id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;