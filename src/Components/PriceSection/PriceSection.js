import React from "react";
import './PriceSection.css';
import SectionTitle from '../SectionTitle/SectionTitle'
import Prices from "../Prices/Prices";
const PriceSection = () => {
    return (
        <>
         <SectionTitle emoji="💲" text="Pricing"/>
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
        </div></>
        
    );
}
export default PriceSection;