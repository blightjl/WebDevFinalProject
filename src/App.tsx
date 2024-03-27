import React from 'react';
import logo from './logo.svg';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Register from './UniSwap/Register';
import Login from './UniSwap/Login'
import "./UniSwap/ColorScheme.css";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="backgroundColor" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Routes>
          {/* <Route path="/" element={<Register/>}/> */}
          <Route path="/" element={<Login/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
