import React from "react";
import './PriceSection.css';
import SectionTitle from '../SectionTitle/SectionTitle'
import Prices from "../Prices/Prices";
const PriceSection = () => {
    return (
        <>
         <div name="PriceSection">
         <div className="prices-st"><SectionTitle emoji="💲" text="Pricing"/></div>
         <div className="prices-title">Select your ideal&nbsp;<span className="highlighted"> Pricing </span>&nbsp;plan</div>
         <div className="prices-description">At Manage Wise, we believe in providing you with<br/> pricing plans that adapt to your unique needs.</div>
         <div className="prices-container">
         <Prices type="FREE" price="$0" benefits={["Access to all basic features",
                                                    "Reporting and analytics",
                                                    "Up to 5 individual users",
                                                    "Chat and email support"]} />
          <Prices type="STANDARD" price="$25" benefits={["Access to all basic features",
                                                    "Reporting and analytics",
                                                    "Up to 5 individual users",
                                                    "Chat and email support",
                                                    "3+ integrations",
                                                    "Account performance reporting"]} />
         <Prices type="BUSINESS" price="$42" benefits={["Access to all basic features",
                                                    "Reporting and analytics",
                                                    "Up to 5 individual users",
                                                    "Chat and email support",
                                                    "3+ integrations"]} />                                                                                     
        </div>
        </div>
        </>
        
    );
}
export default PriceSection;