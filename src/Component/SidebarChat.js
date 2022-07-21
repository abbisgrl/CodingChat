import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Css/SidebarChat.css';
import db from '../firebase';
import Popup from "./Popup";

const SidebarChat = ({ id, name, addNewChat }) => {
    // for random avatars 
    const [seed, setSeed] = useState('');
    const [message, setMessages] = useState('');
    // this is for add new room id
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    // collecting all the message and arrange it in desc order so that message [0] will give latest message
    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection
                ('messages').orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) =>
                        doc.data())))
        }
    }, [id]);

    // setting up for the add new room tooltip
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

        // if there are rooms then that will shown
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sideChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{message[0]?.message}</p>
                </div>
            </div>
        </Link>

    ) : (
        // if there is no room add new chat will popup for adding new room in your database
        <div
            className="sideChat">
            <h2 onClick={togglePopup}>Add new Chat</h2>
            {isOpen && <Popup
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default SidebarChat;