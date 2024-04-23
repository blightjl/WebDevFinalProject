import React, { useState } from "react";
import { Route, Routes, Link, redirect, useNavigate } from "react-router-dom";
import { Account } from "../Account/client";
import * as client from "../Account/client";
import "./index.css"
import "../ColorScheme.css";
import Header from "../Components/Header";

function Homepage() {
    const [credentials, setCredentials] = useState<Account>({ _id: "",
        username: "",
        email: "",
        password: "",
        repeat: "",
        accountType: "USER"
    });

    const navigate = useNavigate();

    const login = async (event : any) => {
        event.preventDefault();
        try {
            // console.log(" YOU ARE NOW LOGGING IN...")
            await client.login(credentials);
            // console.log(response)
            console.log("LOGGING IN!");
            navigate("/home");
        } catch (error) {
            console.log(error);
            console.log("FAILED LOGGING IN LMAO");
            // alert(error);
        }
    };

    const navToRegister = () => {
        navigate("/register");
    };

    return (
        // !NOTE: the UniSwap logo should collapse when it approaches the register box i.e. in screen size: xs, s, m
        <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", height: '100vh' }}>
            <Header />
            <form className="registerBox pinkBackgroundColor" onSubmit={login}>
                <h2 className="adjustedFont" style={{marginTop: "0px"}}>Login</h2>
                <div className="labelInput">
                    <strong className="adjustedFont">Username</strong><br/>
                    <input className="inputField" name="user" value={credentials.username} 
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}/>
                </div>
                <div className="labelInput">
                    <strong className="adjustedFont">Password</strong><br/>
                    <input className="inputField" name="password" type="password" value={credentials.password} 
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <button className="adjustedFont submitButtonLGN" type="submit"><strong>SUBMIT</strong></button>
                    <button className="adjustedFont registerButtonLGN" type="button"  onClick={navToRegister}>
                        <strong>REGISTER</strong>
                    </button>
                </div>
            </form>
            {/* should be scalable */}
        </div>
    );
}

export default Homepage;