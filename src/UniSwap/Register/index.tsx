import { Route, Routes, Link } from "react-router-dom";
import "./index.css"
import "../ColorScheme.css";

function Register() {
    const handleLogin = () => {
        alert("LOGING IN");
    };

    const handleRegister = () => {
        alert("REGISTERED {added new user}");
    };

    return (
        // !NOTE: the UniSwap logo should collapse when it approaches the register box i.e. in screen size: xs, s, m
        <div>
            <h1 className="adjustedFont uniswapLogo titleColor">UniSwap</h1>
            <form className="registerBox pinkBackgroundColor" onSubmit={handleLogin}>
            <h2 className="adjustedFont" style={{marginTop: "0px"}}>Register</h2>
            <div className="labelInput">
                <strong className="adjustedFont">Username</strong><br/>
                <input className="inputField" name="user"/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Email</strong><br/>
                <input className="inputField" name="email"/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Password</strong><br/>
                <input className="inputField" name="password" type="password"/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Repeat Password</strong><br/>
                <input className="inputField" name="confirm-password" type="password"/>
            </div>
            <div>
                <button className="adjustedFont registerButton" type="button" onClick={handleRegister}><strong>REGISTER</strong></button>
                <button className="adjustedFont loginButton" type="submit"><strong>LOG IN</strong></button>
            </div>
            </form>
            {/* should be scalable */}
        </div>
    );
}

export default Register;