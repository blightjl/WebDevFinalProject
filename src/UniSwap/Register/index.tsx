import React, { useState } from "react";
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import * as client from "../Account/client";
import "./index.css"
import "../ColorScheme.css";

function Register() {
    const [error, setError] = useState("");
    const [account, setAccount] = useState({ _id: "", username: "", email: "", 
        password: "", repeat: "", accountType: "USER"
    });
    const navigate = useNavigate();

    const navToLogin = async () => {
        navigate("/");
    }

    const register = async () => {
        try {
            console.log(account);
            await client.register(account);
            navigate("/home");
        } catch (err) {
            if (err instanceof Error) {
              setError(err.message);
            } else {
              setError("Unexpected error encountered.");
            }
        }
    };

    return (
        // !NOTE: the UniSwap logo should collapse when it approaches the register box i.e. in screen size: xs, s, m
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: '100vh' }}>
            <h1 className="adjustedFont uniswapLogo titleColor">UniSwap</h1>
            <form className="registerBox pinkBackgroundColor" onSubmit={navToLogin}>
            <h2 className="adjustedFont" style={{marginTop: "0px"}}>Register</h2>
            <div className="labelInput">
                <strong className="adjustedFont">Username</strong><br/>
                <input className="inputField" name="user" value={account.username} 
                    onChange={(e) => setAccount({...account, username: e.target.value })}/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Email</strong><br/>
                <input className="inputField" name="email" value={account.email}
                    onChange={(e) => setAccount({...account, email: e.target.value })}/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Password</strong><br/>
                <input className="inputField" name="password" type="password" value={account.password}
                    onChange={(e) => setAccount({...account, password: e.target.value })}/>
            </div>
            <div className="labelInput">
                <strong className="adjustedFont">Repeat Password</strong><br/>
                <input className="inputField" name="confirm-password" type="password" value={account.repeat}
                    onChange={(e) => setAccount({...account, repeat: e.target.value })}/>
            </div>
            <div>
                <button className="adjustedFont registerButton" type="button" onClick={register}><strong>REGISTER</strong></button>
                <button className="adjustedFont loginButton" type="submit"><strong>LOG IN</strong></button>
            </div>
            </form>
            <br/>
            {error && <div>{error}</div>}
        </div>
    );
}

export default Register;