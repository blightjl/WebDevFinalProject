import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "../Types/Product";
import StaticTile from "../Components/StaticTile";
import { useSearchParams } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import "./home.css";

function Homepage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);

    useEffect(() => {
        const productType = searchParams.get('search');

        // get products of that type from DB and set it to foundProducts
        // setFoundProducts()
    }, []);

    return (
            <div style={{ height: '100vh' }}>
            <Header />
            <br />
            <h2 className="centerForHome adjustedFont" style={{ fontSize: '35px', }}>
                HOME
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
            <div>
                <div className="centerForHome adjustedFont homelistings">
                    Items for Sale
                </div>
                <div className="listOfItems">
                </div>
            </div>
            <div style={{ backgroundColor: '#e1e9b7', paddingBottom: '100px'}}>
                <div className="centerForHome adjustedFont homelistings">
                    Recently sold Items
                </div>
                <div className="listOfItems">
                </div>
            </div>
                
        </div>
    );
}

export default Homepage;
// style={{width:'100%', backgroundColor: 'purple'}}