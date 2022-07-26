import React from "react";
import './signup.styles.css';
import InputField from "../input/input.component";
import { useNavigate } from "react-router";

const Signup = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/home")
    }

    return(
        <div className="signup">
            <div className="signup-input">
                <InputField placeholder={"Full Name"} type={"text"} />
            </div>
            <div className="signup-input">
                <InputField placeholder={"Email"} type={"password"} />
            </div>
            <div className="signup-input">
                <InputField placeholder={"Password"} type={"password"} />
            </div>
            <div className="sub-btn-signup">
                <button onClick={navigateToHome}>Sign up</button>
            </div>
            <div className="rem-me">
                <input type="checkbox" />
                <p>Remember Me</p>
            </div>
        </div>
    )
}

export default Signup;