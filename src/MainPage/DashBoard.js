import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './DashBoard.css';

const DashBoard = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    // Add a scroll event listener to update the transform property on scroll
    const handleScroll = () => {
      const image = document.querySelector(".dash");
      if (image) {
        const scrollY = window.scrollY;
        const perspective = 500; // Adjust the perspective value based on your preference
        const tiltAngle = -10 * Math.PI / 180;// Reverse the multiplier to achieve the desired effect
        image.style.transform = `perspective(${perspective}px) rotateX(${tiltAngle}rad)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div data-aos="scroll-zoom-out" className="dashboard">
      <img src="/Dashboard.webp" className="dash" alt="Dashboard" />
    </div>
  );
}

export default DashBoard;


