import React from "react";
import SectionTitle from "./Components/SectionTitle/SectionTitle";
import PriceSection from "./Components/PriceSection/PriceSection";
import Feature from "./Components/Features/Feature"
import AdditionFeature from "./Components/AdditionalFeatures/AdditionalFeature";
import ExpandableBox from "./Components/ExpandableBox/ExpandableBox";
import TestimonialsSlider from "./Components/TestimonialSlider/TestimonialSlider";
import Header from "./MainPage/Header";
import Welcome from "./MainPage/Welcome";
import DashBoard from "./MainPage/DashBoard";
import FeatureSection from "./Components/FeatureSection/FeatureSection";
const App = () => {
    return (
        <>
        <Header/>
        <Welcome/>
        <DashBoard/>
        <FeatureSection/>
        <ExpandableBox title="What is Manage Wise and what does it offer?" description="Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more."/>
        <AdditionFeature image={'/CrossPlatform.png'} title="Cross-Platform Compatibility" description="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."/>
        <PriceSection/>
        <TestimonialsSlider/>
        </>
    );
}
export default App;