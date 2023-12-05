import React from "react";
import './NonImageFeature.css'
const NonImageFeature = ({emoji, description}) => {
    return (
        <div className="nonimagefeature-container">
            <span className="nonimagefeature-emoji" role="img" aria-label="nonimagefeature-emoji">{emoji}</span>
            <p className="nonimagefeature-description">{description}</p>
        </div>
    );
}

export default NonImageFeature;