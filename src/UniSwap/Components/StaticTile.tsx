import React from "react";
import { Link } from "react-router-dom";
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
    <Link to={`/product/?productName=${title}`}>
      <div 
        className={`static-tile-container-${size}`}
      >
        <img src={image} className={`interactable-tile-image-${size}`} />
        {size !== 'sm' &&
          <>
          <p style={{ fontSize: '2rem' }} className="adjustedFont">{title}</p>
          <p style={{ fontSize: '2rem' }} className="adjustedFont">{`${price}$`}</p>  
          </>
        }
      </div>
    </Link>
  )
}