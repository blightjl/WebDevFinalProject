import React from "react";
import Product from "../Types/Product";

export default function ProductListingTile({
  product
} : {
  product: Product
}) { 
  return (
    <div className="static-tile-container">
      {/* <img src={product.image} alt={product.title}  /> */}
      <h3 className="adjustedFont">{product.title}</h3>
      <h3 className="adjustedFont">{product.price}</h3>
    </div>
  );
};
