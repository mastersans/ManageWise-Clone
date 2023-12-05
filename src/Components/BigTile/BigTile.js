import React from "react";
import './BigTile.css'
const BigTile = ({image, title, description}) => {
    return (
        <div className="bigtile-container" >
        <img src={image} alt={title} className="bigtile-image" />
        <div className="bigtile-details">
            <h2 className="bigtile-title">{title}</h2>
            <p className="bigtile-description">{description}</p>
        </div>
        </div>
    );
}

export default BigTile;