import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './DashBoard.css';

const DashBoard = () => {
  useEffect(()=> {
    Aos.init({ duration: 2000 });
}, []);
   return (
    <div className="dashboard">
      <img src="/Dashboard.webp" data-aos="fade-up" duration="900" className="dash" alt="Dashboard" />
    </div>
  );
}
export default DashBoard;