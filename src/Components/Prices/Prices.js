import React from "react";
import './Prices.css';

const Prices = ({type, price, benefits}) => {
       return (
        <div className="Prices">
        <div className="Prices__type">{type}</div>
        <div className="Prices__price">{price}<span className="Prices__month"> /month</span></div>
        <ul className="Prices__benefits">
        {Array.isArray(benefits) &&
          benefits.map((benefit, index) => (
            <li key={index} className="Prices__benefits-item">
              {benefit}
            </li>
          ))}
      </ul>
      <button className="Prices_button">Get Started</button>
      </div>
       );
}
export default Prices;