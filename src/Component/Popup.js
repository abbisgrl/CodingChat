import { Button } from "@mui/material";
import React, { useState } from "react";
import '../Css/Popup.css';
import db from "../firebase";

const Popup = (props) => {
    // this is for setting the roomname
    const [roomName, setRoomName] = useState('');

    //adding new room in database through add new room functionality
    const createChat = () => {
        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
            setRoomName('');
        }

    };
    return (
        //when user want to create new room then he/she have to click on add new room and then a small 
        //box will show where he/she have to enter the room name and then the room is created
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