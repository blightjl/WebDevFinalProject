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
import SearchPage from './UniSwap/Search/SearchPage';
import Homepage from './UniSwap/Homepage/index';
import ProductListing from './UniSwap/Product Listing/ProductListing';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

    <ChakraProvider>
      <HashRouter>
        {/* <div className="backgroundColor" style={{display: "flex", alignItems: "center", justifyContent: "center", alignItems: 'flex-'}}> */}
          <Routes>
            <Route path="/buyer-profile/*" element={<BuyerProfile/>}/>
            <Route path="/seller-profile/*" element={<SellerProfile/>}/>
            <Route path="/home" element={<Homepage />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Login />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product/*" element={<ProductListing />} />
          </Routes>
        {/* </div> */}
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
