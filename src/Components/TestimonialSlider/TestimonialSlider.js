import SectionTitle from '../SectionTitle/SectionTitle';
import React, { useEffect, useRef } from 'react';
import Testimonial from '../Testimonials/Testimonial'; 
import './TestimonialSlider.css'; 

const testimonialsData = [
  {
    id: 1,
    quote: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
    photoUrl: "/Emily.webp",
    name: "Emily",
    designation: "Art Director",
  },
  {
    id: 2,
    quote: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
    photoUrl: "/Sarah.webp",
    name: "Sarah",
    designation: "Project Manager",
  },
  {
    id: 3,
    quote: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
    photoUrl: "/David.webp",
    name: "David",
    designation: "Freelancer",
  },
  {
    id: 4,
    quote: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks",
    photoUrl: "/Alex.webp",
    name: "Alex",
    designation: "IT Manager",
  },
  {
    id: 5,
    quote: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
    photoUrl: "/Emily.webp",
    name: "Emily",
    designation: "Art Director",
  },
  {
    id: 6,
    quote: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
    photoUrl: "/Sarah.webp",
    name: "Sarah",
    designation: "Project Manager",
  },
  {
    id: 7,
    quote: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
    photoUrl: "/David.webp",
    name: "David",
    designation: "Freelancer",
  },
  {
    id: 8,
    quote: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks",
    photoUrl: "/Alex.webp",
    name: "Alex",
    designation: "IT Manager",
  },
];

const TestimonialsSlider = () => {

  return (
    <div name="Testimonial">
    <div className="testimonial-st"><SectionTitle emoji="🧡" text="Testimonial"/></div>
    <div className="testimonial-title">Hear from our&nbsp;<span className="highlighted"> Satisfied </span>&nbsp;clients</div>
    <div className="testimonial-description">Discover why our clients love working with us. Read their<br/> testimonials and learn how we has helped businesses.</div>
    <div className="client-testimonials-slider animate">
      {testimonialsData.map((testimonial) => (
        <Testimonial
          key={testimonial.id}
          quote={testimonial.quote}
          photoUrl={testimonial.photoUrl}
          name={testimonial.name}
          designation={testimonial.designation}
        />
      ))}
    </div>
    </div>
  );
};

export default TestimonialsSlider;
