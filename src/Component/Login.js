import React from "react";
import '../Css/Login.css';
import { Button } from "@mui/material";
import {auth,provider} from '../firebase';
const Login = () => {
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result)=>console.log(result))
        .catch((error)=> alert(error.message));
    }
    return (
        <div className="Login">
            <div className="Login_container">
                <img
                    src='src\Assets\CodingChat-logos.jpeg'
                    alt=''
                />
                <div className="Login_text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login;