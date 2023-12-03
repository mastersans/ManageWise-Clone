import React from "react";
import './Feature.css'
const Feature = ({image, title, description}) => {
    return (
        <div className="feature-container">
        <img src={image} alt={title} className="feature-image" />
        <div className="feature-details">
            <h2 className="feature-title">{title}</h2>
            <p className="feature-description">{description}</p>
        </div>
        </div>
    );
}

export default Feature;