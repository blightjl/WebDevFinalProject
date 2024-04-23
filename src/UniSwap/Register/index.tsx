import React, { useState } from "react";
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import * as client from "../Account/client";
import "./index.css"
import "../ColorScheme.css";
import Header from "../Components/Header";

const accountTypes = ['BUYER', 'SELLER', 'ADMIN', 'USER'];

function Register() {
  const [error, setError] = useState("");
  const [account, setAccount] = useState({
    _id: "",
    username: "",
    email: "", 
    password: "",
    repeat: "",
    accountType: "USER",
  });
  const navigate = useNavigate();

  const handleRadioChange = (event: any) => {
    setAccount({...account, accountType: event.target.value })
  };
  const navToLogin = async () => {
    navigate("/");
  }

  const register = async () => {
    try {
      console.log(account);
      await client.register(account);
      // navigate("/");
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
    <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", height: '100vh' }}>
      <Header />
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
      <div className="labelInput">
        <strong className="adjustedFont">User Type</strong><br/>
        {accountTypes.map((type) => 
          <>
            <input
            type="radio"
            id={type}
            key={type}
            name="radioGroup"
            value={type}
            checked={account.accountType === type}
            onChange={handleRadioChange}
            />
            <label htmlFor={type} style={{ fontSize: '.7rem' }} className='adjustedFont'>{type}</label><br />
          </>
        )}
      </div>
      <div>
        <button className="adjustedFont registerButton" type="button" onClick={register}>
          <strong>SUBMIT</strong>
        </button>
        <Link to="/login">
          <button className="adjustedFont loginButton"><strong>LOG IN</strong></button>
        </Link>
      </div>
      </form>
      <br/>
      {/* {error && <div>{error}</div>} */}
    </div>
  );
}

export default Register;