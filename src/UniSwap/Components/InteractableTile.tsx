import React, { useState } from "react";
import "./Tile.css";
import "../ColorScheme.css";

export default function InteractableTile(
    {
        image,
        title,
        description,
        price,
    } : {
        image: any,
        title: string,
        description: string,
        price: string
    }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
        
    
    return (
        <div 
            className="interactable-tile-container"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <img src={image} className="interactable-tile-image" />
            {isHovered && 
                <div className="interactable-tile-extra-info">
                    <h3 className="adjustedFont">{title}</h3>
                    <p className="adjustedFont">{description}</p>
                    <h4 className="adjustedFont">{`${price}$`}</h4>
                </div>
            }
        </div>
    )
}