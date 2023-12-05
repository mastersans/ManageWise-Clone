import React, {useEffect} from "react";
import "./FeatureSection.css";
import Aos from "aos";
import SectionTitle from "../SectionTitle/SectionTitle";
import AllFeatures from "../AllFeatures/AllFeatures";
const FeatureSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="feature-sec">
            <div data-aos="fade-up" data-aos-duration="800" className="feature-st"><SectionTitle emoji={"🔥"} text="PREMIER FEATURES"/></div>
            <div data-aos="fade-up" data-aos-duration="1000" className="feature-tit">Discover our product's&nbsp;<span className="highlighted"> Capabilities </span></div>
            <div data-aos="fade-up" data-aos-duration="1100" className="feature-des">Don't settle for mediocrity - embrace the future of management <br/>with Manage Wise.</div>
            <AllFeatures/>
        </div>
    );
}

export default FeatureSection; 