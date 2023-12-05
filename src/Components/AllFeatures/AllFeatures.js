import React from "react";
import Aos from "aos";
import './AllFeatures.css';
import Feature from '../Features/Feature'
import BigTile from '../BigTile/BigTile'
import NonImageFeature from '../Features/NonImageFeature'
const AllFeatures = () => {
    return (
    <div className="all-features">
        <div className="upper-features">
              <div data-aos="fade-right" duration="1000" className="upper-left"><NonImageFeature emoji="⭐" description="Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features."/></div>
              <div data-aos="fade-down" duration="1000" className="upper-right"><BigTile image="./SmartTaskManagement.webp" title="Smart Task Management" description="Say goodbye to chaos with our smart task management system"/></div>
        </div>
        <div className="lower-features">
              <div data-aos="fade-right" duration="1000" className="lower-1"><Feature image="./FlexibleScheduling.webp" title="Flexible Scheduling" description="Stay productive with our flexible scheduling system"/></div>
              <div data-aos="fade-up" duration="1300" className="lower-2"><Feature image="./EasyCommunication.webp" title="Easy Communication" description="Collaborate seamlessly with your team in real-time"/></div>
              <div data-aos="fade-left" duration="1000" className="lower-3"><Feature image="./Analytics.webp" title="Analytics" description="Gain valuable insights with our advanced analytics feature"/></div>  
        </div>
    </div>
    );
}

export default AllFeatures;