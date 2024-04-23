import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./SearchPage.css";
import "../ColorScheme.css";
import Product from "../Types/Product";
import StaticTile from "../Components/StaticTile";
import { useSearchParams } from "react-router-dom";
import * as productClient from '../Types/productClient';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundProducts, setFoundProducts] = useState<Product[]>([]);

  useEffect(() => {
      const productName = searchParams.get('productName') || '';

      const fetchProducts = async () => {
        const allProducts = await productClient.findAllProducts();
        const filteredProducts = allProducts.filter((name: string) => name.includes(productName));
        setFoundProducts(filteredProducts);
      }
      fetchProducts();
  }, []);
  
  return(
    <div className="search-container">
      <Header />
      <br />
      <h2 className="adjustedFont" style={{ width: 'fit-content' }}>
        {searchParams && `Here are some results for ${searchParams.get('productName')}`}
      </h2>
      <div className="products-container">
        {foundProducts.length > 0 
            ? foundProducts.map((product, index) => (
            <StaticTile 
              title={product.image}
              price={product.price}
              image={product.image}
              key={index}
            />
          ))
        : <p className="adjustedFont">No Results Found...</p>}
      </div>
    </div>
  );
}