import React from "react";
import SectionTitle from "./Components/SectionTitle/SectionTitle";
import Prices from "./Components/Prices/Prices";
import Feature from "./Components/Features/Feature"
import AdditionFeature from "./Components/AdditionalFeatures/AdditionalFeature";
import ExpandableBox from "./Components/ExpandableBox/ExpandableBox";
import TestimonialsSlider from "./Components/TestimonialSlider/TestimonialSlider";
import Header from "./MainPage/Header";
const App = () => {
    return (
        <>
        <Header/>
        <SectionTitle emoji="😀" text="WELCOME TO MANAGE WISE!" />
        <TestimonialsSlider/>
        <Prices type="FREE" price="$100" benefits={["Access to all basic features",
                                                    "Reporting and analytics",
                                                    "Up to 5 individual users",
                                                    "Chat and email support"]} />
        <Feature image={'/FlexibleScheduling.webp'} title="Flexible Scheduling" description="Stay productive with our flexible scheduling system"/>
        <ExpandableBox title="What is Manage Wise and what does it offer?" description="Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more."/>
        <AdditionFeature image={'/CrossPlatform.png'} title="Cross-Platform Compatibility" description="Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."/>
        </>
    );
}
export default App;