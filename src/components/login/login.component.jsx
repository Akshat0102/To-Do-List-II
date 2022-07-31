import React from "react";
import './login.styles.css';
import InputField from "../input/input.component";

const Login = ({setLogEmail, setLogPassword, handleLogin}) => {

    return (
        <div className="login">
            <div className="login-header-text">
                <p className="to-con">To Continue</p>
                <p className="need-mail">We need your email and password</p>
            </div>
            <div className="login-input">
                <InputField placeholder={"Email"} type={"email"} setterFunction={setLogEmail}/>
            </div>
            <div className="login-input">
                <InputField placeholder={"Password"} type={"password"} setterFunction={setLogPassword}/>
            </div>
            <div className="sub-btn-login">
                <button onClick={handleLogin}>Log In</button>
            </div>
            <div className="rem-me">
                <input type="checkbox" />
                <p>Remember Me</p>
            </div>
        </div>
    )
}

export default Login;