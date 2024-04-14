import React from "react";
import "./Header.css";
import marketPlace from "../Images/marketplace_icon.png";
import mag_glass from "../Images/magnifying_glass_icon.png";
import { Link } from "react-router-dom";

export default function Header(
) {
  const HomeIcon = (
    <Link to="/home">
      <div 
        className="home-icon"
      >
        <img src={marketPlace} className="home-icon-image"/>
      </div>
    </Link>
  );

  const AccountButton = ( // TODO get user ID  
    <Link to="/account?userID=">
      <div className="account-button">
        <h2 className="adjustedFont" style={{ margin: 0, padding: 0, textDecoration: 'none' }}>Account</h2>
      </div>
    </Link>
  )
  
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
    <div className="row" style={{ alignItems: 'center' }}>
      {HomeIcon}
      {AccountButton}
      {SearchBar}
      <h3 className="adjustedFont uniswapLogoMini titleColor">UniSwap</h3>
    </div>
  )
}