import React, {useEffect} from "react";
import './Welcome.css';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Aos from "aos";
import "aos/dist/aos.css"
const Welcome = () => {
    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, []);
     return (
        <>
        <div className="welcome-section">
  <div data-aos="fade-up" data-aos-duration="1000" className="welcome-st">
    <SectionTitle emoji="👋" text="WELCOME TO MANAGE WISE!" />
  </div>
  <div data-aos="fade-up" data-aos-duration="1200" className="welcome-title">
    Empower your business with
  </div>
  <div data-aos="fade-up" data-aos-duration="1200" className="welcome-title">
  <span className="highlighted"> Strategic </span>&nbsp;insights
  </div>
  <div data-aos="fade-up" data-aos-duration="1400" className="welcome-description">
    Powerful management platform designed to streamline your business<br /> operations, boost productivity, and drive success.
  </div>
  <div data-aos="fade-up" data-aos-duration="1600" className="welcome-button">
    <button className="get-started">Get Started</button>
    <button className="watch-demo">Watch Demo</button>
  </div>
</div>
        </>
        
     );
}
export default Welcome; 