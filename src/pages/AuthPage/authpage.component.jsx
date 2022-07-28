import React, { useState } from "react";
import './authpage.styles.css';
import LoginArt from '../../assets/login-img/artwork-login.svg';
import Login from "../../components/login/login.component";
import Signup from "../../components/signup/signup.component";
import axios from 'axios';

const AuthPage = () => {

    const [login, setLogin] = useState(true);
    
    const [username, setUsername] = useState("");
    const [signpassword, setSignPassword] = useState("");
    const [signemail, setSignEmail] = useState("");

    const [logemail, setLogEmail] = useState("");
    const [logpassword, setLogPassword] = useState("");

    const handleSignup = async () => {
        const res = await axios.post('https://localhost')
    }

    return (
        <div className="auth">
            <div className="auth-img">
                <img src={LoginArt} alt="login-artwork" />
            </div>
            <div className="auth-comp">
                <div className="outer-container">
                    <div className="container-wrap">
                        <div className="auth-type">
                            <p className={login?"login-text active":"login-text"} onClick={() => setLogin(true)}>Log In</p>
                            <p className={!login?"signup-text active":"signup-text"} onClick={() => setLogin(false)}>Sign up</p>
                        </div>
                        <div className="div-line"></div>
                        <div className="auth-type-comp">
                            {
                                login 
                                ? 
                                <Login />
                                :
                                <Signup />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;