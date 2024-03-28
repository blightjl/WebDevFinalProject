import { Route, Routes, Link, redirect } from "react-router-dom";
import "./index.css"
import "../ColorScheme.css";

function Homepage() {
    const handleSubmit = () => {
        alert("SUBMITTED!");
    };

    const handleRegister = () => {
        alert("LOADING REGISTER PAGE");
    };

    return (
        // !NOTE: the UniSwap logo should collapse when it approaches the register box i.e. in screen size: xs, s, m
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: '100vh' }}>
            <h1 className="adjustedFont uniswapLogo titleColor">UniSwap</h1>
            <form className="registerBox pinkBackgroundColor" onSubmit={handleRegister}>
            <h2 className="adjustedFont" style={{marginTop: "0px"}}>Login</h2>
            <div className="labelInput">
                <strong className="adjustedFont">Username/Email</strong><br/>
                <input className="inputField" name="user"/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Password</strong><br/>
                <input className="inputField" name="password" type="password"/>
            </div>
            <div>
                <button className="adjustedFont submitButtonLGN" type="button" onClick={handleSubmit}><strong>SUBMIT</strong></button>
                <button className="adjustedFont registerButtonLGN" type="submit"><strong>REGISTER</strong></button>
            </div>
            </form>
            {/* should be scalable */}
        </div>
    );
}

export default Homepage;