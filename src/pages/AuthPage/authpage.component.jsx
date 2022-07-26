import React, { useState } from "react";
import './authpage.styles.css';
import LoginArt from '../../assets/login-img/artwork-login.svg';
import Login from "../../components/login/login.component";
import Signup from "../../components/signup/signup.component";

const AuthPage = () => {

    const [login, setLogin] = useState(true);

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