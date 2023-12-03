import React from "react";
import './Welcome.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
const Welcome = () => {
     return (
        <>
        <div className="welcome-section">
            <div className="welcome-st"><SectionTitle emoji="👋" text="WELCOME TO MANAGE WISE!"/></div>
            <div className="welcome-title">Empower your business with &nbsp;<span className="highlighted"> Strategic </span>&nbsp;insights</div>
            <div className="welcome-description">Powerful management platform designed to streamline your business<br/> operations, boost productivity, and drive success.</div>
            <div className="dashboard"><img src="/Dashboard.webp" className="dash" /></div>
        </div>
        </>
        
     );
}
export default Welcome; 