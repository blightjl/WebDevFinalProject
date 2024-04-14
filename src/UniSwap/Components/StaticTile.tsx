import React from "react";
import './Tile.css';

export default function StaticTile(
  {
    title,
    price,
    image,
    size,
  } : {
    title: string;
    price: string;
    image: any;
    size?: string;
  }
) {
  return(
    <div 
      className={`static-tile-container-${size}`}
    >
      <img src={image} className={`interactable-tile-image-${size}`} />
      {size !== 'sm' &&
        <>
        <h3 className="adjustedFont">{title}</h3>
        <h4 className="adjustedFont">{`${price}$`}</h4>  
        </>
      }
    </div>
  )
}