import React from "react";
import './signup.styles.css';
import InputField from "../input/input.component";

const Signup = ({ setUsername, setSignEmail, setSignPassword, handleSignup }) => {

    return (
        <div className="signup">
            <div className="signup-input">
                <InputField placeholder={"UserName"}
                    type={"text"}
                    setterFunction={setUsername} />
            </div>
            <div className="signup-input">
                <InputField placeholder={"Email"}
                    type={"email"}
                    setterFunction={setSignEmail} />
            </div>
            <div className="signup-input">
                <InputField placeholder={"Password"}
                    type={"password"}
                    setterFunction={setSignPassword} />
            </div>
            <div className="sub-btn-signup">
                <button onClick={handleSignup}>Sign up</button>
            </div>
            <div className="rem-me">
                <input type="checkbox" />
                <p>Remember Me</p>
            </div>
        </div>
    )
}

export default Signup;