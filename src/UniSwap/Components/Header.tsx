import React, { useEffect, useState } from "react";
import "./Header.css";
import marketPlace from "../Images/marketplace_icon.png";
import mag_glass from "../Images/magnifying_glass_icon.png";
import { Link } from "react-router-dom";

export default function Header(
) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const HomeIcon = (
    <Link to="/home">
      <div 
        className="home-icon"
      >
        <img src={marketPlace} className="home-icon-image"/>
      </div>
    </Link>
  );

  const AccountButton = () => { 
    // TODO get user ID
    let userID = 1
    // TODO get if user is buyer or seller
    let buyerOrSeller = 'seller-profile'
    return(
    <Link to={`/${buyerOrSeller}?userID=${userID}`}>
      <div className="account-button">
        <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>Account</h2>
      </div>
    </Link>)
  };
  
  const SearchBar = (
    <div>
      <input 
        className="searchbar" 
        type="text" 
        id="searchBar" 
        placeholder={"Search for a Product..."} 
        // defaultValue={searchParams}
      />
    </div>
  )

  return(
    <div className="row" style={{ alignItems: 'center', flexWrap:'nowrap', height: 96 }}>
      {HomeIcon}
      <AccountButton />
      {SearchBar}
      {width > 1150 && <h3 className="adjustedFont uniswapLogoMini titleColor">UniSwap</h3>}
    </div>
  )
}