// import React from "react";

// export default function SavedProductTile(
//     {
//         title,
//         image,
//     }: {
//         title: string,
//         image: any,
//     }
// ) {
//     return (
//         <div
//             className="static-tile-container"
//         >
//             <img src={image} className="interactable-tile-image" />
//             <h3 className="adjustedFont">{title}</h3>
//         </div>
//     )
// }

import React from "react";
import  {Product}  from "./product";

interface SavedProductTileProps {
    product: Product;
}

const SavedProductTile: React.FC<SavedProductTileProps> = ({ product }) => {
    return (
        <div className="static-tile-container">
            <img src={product.image} alt={product.title}  />
            <h3 className="adjustedFont">{product.title}</h3>
        </div>
    );
};

export default SavedProductTile;