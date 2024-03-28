import React from "react";

export default function StaticTile(
    {
        title,
        price,
        image,
    } : {
        title: string,
        price: string,
        image: any,
    }
) {
    return(
        <div 
            className="static-tile-container"
        >
            <img src={image} className="interactable-tile-image" />
            <h3 className="adjustedFont">{title}</h3>
            <h4 className="adjustedFont">{`${price}$`}</h4>  
        </div>
    )
}