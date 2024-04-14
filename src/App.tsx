import React from 'react';
import logo from './logo.svg';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Register from './UniSwap/Register';
import Login from './UniSwap/Login'
import "./UniSwap/ColorScheme.css";
import './App.css';
import BuyerProfile from './UniSwap/BuyerProfile';
import SellerProfile from './UniSwap/SellerProfile';
import EditProfile from './UniSwap/ProfileEdit';

function App() {
  return (
    <HashRouter>
      <div className="backgroundColor" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Routes>
          {/* <Route path="/" element={<Register/>}/> */}
          {/* <Route path="/" element={<Login/>}/> */}
          {/* <Route path="/" element={<BuyerProfile/>}/> */}
          <Route path="/" element={<SellerProfile/>}/>
          
          {/* <Route path="/" element={<EditProfile onClose={function (): void {
            throw new Error('Function not implemented.');
          } } onUpdateProfile={function (updatedInfo: any): void {
            throw new Error('Function not implemented.');
          } }/>}/> */}


        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
