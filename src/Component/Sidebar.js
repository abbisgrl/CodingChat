import React from "react";
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../Css/Sidebar.css';
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
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
                <SidebarChat addNewChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar;