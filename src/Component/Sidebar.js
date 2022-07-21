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
import { useStateValue } from "../Context/StateProvider";

const Sidebar = () => {
    // this is for sidebar where rooms and other icons will shown
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    //collecting all rooms and set in setRoom hook so that later that can be use to show at sidebar
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    }, []);

    return (
        // sidebar also divide into three parts -sidebar header ,search box and sidebar chat 
        <div className="sidebar">
            {/* this is sidebar header which contain user dp and other necessary icon which are just dummy */}
            <div className="sidebar_header">
                <Avatar src={user?.photoURL} />
                <div className="header_right">
                    <IconButton>
                        <DonutLargeIcon fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton>
                        <ChatIcon fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon fontSize="small" color="primary" />
                    </IconButton>

                </div>
            </div>

            {/* This is the search box which is just dummy for now */}
            <div className="search_box">
                <div className="search_boxContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new conversation" type='text' />
                </div>

            </div>
            {/* sidebar chat is seperate component and we map the room so that for different room 
            sidebar chat is shown .We send room id and name as props to sidebar so that using that 
            last message can be show in sidebar chatbox */}
            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                {rooms.map((room) => (
                    <SidebarChat key={room.id}
                        id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar;