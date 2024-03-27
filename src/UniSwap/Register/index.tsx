import { Route, Routes, Link } from "react-router-dom";
import "./index.css"
import "../ColorScheme.css";

function Register() {
    const handleLogin = () => {
        alert("LOGIN.");
    };

    const handleRegister = () => {
        alert("REGISTER.");
    };

    return (
        // the logo at the top right
        <div>
            <h1 className="adjustedFont uniswapLogo titleColor" style={{}}>UniSwap</h1>
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
                <input className="inputField" name="password"/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Repeat Password</strong><br/>
                <input className="inputField" name="confirm-password"/>
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