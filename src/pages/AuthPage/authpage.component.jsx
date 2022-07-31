import React, { useState } from "react";
import './authpage.styles.css';
import LoginArt from '../../assets/login-img/artwork-login.svg';
import Login from "../../components/login/login.component";
import Signup from "../../components/signup/signup.component";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AuthPage = () => {

    const [login, setLogin] = useState(true);

    const [username, setUsername] = useState("");
    const [signpassword, setSignPassword] = useState("");
    const [signemail, setSignEmail] = useState("");

    const [logemail, setLogEmail] = useState("");
    const [logpassword, setLogPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {
        const res = await axios.post('https://todo-taskez.herokuapp.com/register', {
            username: username,
            password: signpassword,
            email: signemail
        })
        console.log(res.data);
        setLogin(true);
    }

    const handleLogin = async () => {
        const res = await axios.post('https://todo-taskez.herokuapp.com/login', {
            email: logemail,
            password: logpassword
        })
        console.log(res.data);
        const token = res?.data?.token;
        const tokenArr = token.split(" ");
        // console.log("TOKEN: ", tokenArr);
        localStorage.setItem('token', tokenArr[1]);

        if(res.data.success === true) navigate('/home');
        else navigate('/');
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
                            <p className={login ? "login-text active" : "login-text"} onClick={() => setLogin(true)}>Log In</p>
                            <p className={!login ? "signup-text active" : "signup-text"} onClick={() => setLogin(false)}>Sign up</p>
                        </div>
                        <div className="div-line"></div>
                        <div className="auth-type-comp">
                            {
                                login
                                    ?
                                    <Login
                                        setLogEmail={setLogEmail}
                                        setLogPassword={setLogPassword}
                                        handleLogin={handleLogin}
                                    />
                                    :
                                    <Signup
                                        setUsername={setUsername}
                                        setSignEmail={setSignEmail}
                                        setSignPassword={setSignPassword}
                                        handleSignup={handleSignup}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;