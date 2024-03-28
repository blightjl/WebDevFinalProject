import React from "react";
import "./Header.css";
import marketPlace from "../Images/marketplace_icon.png";
import mag_glass from "../Images/magnifying_glass_icon.png";

export default function Header(
    // {
    //     searchParams,
    //     setSearchParams,
    // } : {
    //     searchParams: string,
    //     setSearchParams: Function,
    // }
) {
    // const handleSearch = (value: string) => {
    //     setSearchParams(value);
    // }

    const handleHomeClick = () => {

    }
    const handleAccountClick = () => {

    }

    const HomeIcon = (
        <div 
            className="home-icon"
            onClick={handleHomeClick}
        >
            <img src={marketPlace} className="home-icon-image"/>
        </div>
    );

    const AccountButton = (
        <div
            className="account-button"
            onClick={handleAccountClick}
        >
            <h2 className="adjustedFont" style={{ margin: 0, padding: 0 }}>Account</h2>
        </div>
    )
    
    const SearchBar = (
        <div 
            
        >
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