import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./SearchPage.css";
import "../ColorScheme.css";
import Product from "../Types/Product";
import StaticTile from "../Components/StaticTile";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);

    useEffect(() => {
        const productType = searchParams.get('search');

        // get products of that type from DB and set it to foundProducts
        // setFoundProducts()
    }, []);
    return(
        <div className="search-container">
            <Header />
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