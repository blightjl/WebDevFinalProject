import React from 'react';
import logo from './logo.svg';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Register from './UniSwap/Register';
import Login from './UniSwap/Login'
import "./UniSwap/ColorScheme.css";
import './App.css';
import ProfilePage from './UniSwap/Profile';
import SearchPage from './UniSwap/Search/SearchPage';
import Homepage from './UniSwap/Homepage/home';
import ProductListing from './UniSwap/Product Listing/ProductListing';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route path="/profile/*" element={<ProfilePage/>}/>
          <Route path="/home" element={<Homepage />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details/*" element={<ProductListing />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
