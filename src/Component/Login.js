import React from "react";
import '../Css/Login.css';
import { Button } from "@mui/material";
import { auth, provider } from '../firebase';
import { useStateValue } from "../Context/StateProvider";
import { actionTypes } from "../Context/Reducer";
import Logo from '../Assets/CodingChat-logos.jpeg'
const Login = () => {

    //this is for pull or push data in the center store of the app
    const [{ }, dispatch] = useStateValue();
    
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className="Login">
            <div className="Login_container">
                <img
                    src={Logo}
                    alt=''
                />
                <div className="Login_text">
                    <h1>Coding Chat</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login;