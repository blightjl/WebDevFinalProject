import React from "react";
import { Link } from "react-router-dom";
import './Tile.css';

export default function StaticTile(
{
  title,
  price,
  image,
} : {
  title: string;
  price: string;
  image: any;
}
) {
  return(
    <div 
      className={`static-tile-container`}
    >
      <Link to={`/details/?identifier=${title}`}>
        <img src={image} className={`interactable-tile-image`} />
        <p style={{ fontSize: '1rem' }} className="adjustedFont">{title}</p>
        <p style={{ fontSize: '1rem' }} className="adjustedFont">{`${price}$`}</p>  
      </Link>
    </div>
  )
}