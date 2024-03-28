import React, { useState } from "react";
import Header from "../Components/Header";
import "./SearchPage.css";
import "../ColorScheme.css";
import Product from "../Types/Product";
import StaticTile from "../Components/StaticTile";

export default function SearchPage() {
    const [searchParams, setSearchParams] = useState<string>('');
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);
    
    return(
        <div className="search-container">
            <Header 
                // searchParams={searchParams} 
                // setSearchParams={setSearchParams}
            />
            <br />
            <h2 className="adjustedFont" style={{ width: 'fit-content' }}>
                {searchParams && `Here are some results for ${searchParams}`}
            </h2>
            <div className="products-container">
                {foundProducts.map((product, index) => (
                    <StaticTile 
                        title={product.image}
                        price={product.price} 
                        image={product.image}        
                        key={index}            
                    />
                ))}
            </div>
        </div>
    );
}