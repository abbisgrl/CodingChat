import { Button } from "@mui/material";
import React, { useState } from "react";
import '../Css/Popup.css';
import db from "../firebase";

const Popup = (props) => {

    const [roomName, setRoomName] = useState('');

    const createChat = () => {

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
            setRoomName('');
        }

    };
    return (
        <div className="box">
            <span className="close-icon" onClick={props.handleClose}>X</span>
            <label>Enter Room Name</label>
            <input type='text' value={roomName} onChange={(e) => { setRoomName(e.target.value) }} />
            {console.log(roomName)}
            <Button size="small" onClick={createChat}>Add room </Button>
        </div>
    )
}

export default Popup;