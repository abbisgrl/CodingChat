import React from "react";
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../Css/Sidebar.css';
import { IconButton } from "@mui/material";

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
            <div className="sidebar_search">

            </div>
            <div className="sidebar_chats">

            </div>
        </div>
    )
}

export default Sidebar;