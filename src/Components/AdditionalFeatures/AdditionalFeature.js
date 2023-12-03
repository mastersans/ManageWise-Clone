import React from "react";
import './AdditionFeature.css'
const AdditionFeature = ({image, title, description}) => {
    return (
        <div className="extrafeature-container">
        <img src={image} alt={title} className="extrafeature-image" />
        <div className="extrafeature-details">
            <h2 className="extrafeature-title">{title}</h2>
            <p className="extrafeature-description">{description}</p>
        </div>
        </div>
    );
}

export default AdditionFeature;