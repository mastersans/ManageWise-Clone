
import React, { useEffect, useRef } from 'react';
import Testimonial from '../Testimonials/Testimonial'; 
import './TestimonialSlider.css'; 

const testimonialsData = [
  {
    id: 1,
    quote: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
    photoUrl: "/Sarah.webp",
    name: "Sarah",
    designation: "Project Manager",
  },
  {
    id: 2,
    quote: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
    photoUrl: "/David.webp",
    name: "David",
    designation: "Freelancer",
  },
  {
    id: 3,
    quote: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks",
    photoUrl: "/Alex.webp",
    name: "Alex",
    designation: "IT Manager",
  },
  {
    id: 4,
    quote: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
    photoUrl: "/Emily.webp",
    name: "Emily",
    designation: "Art Director",
  },
];

const TestimonialsSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const testimonials = slider.querySelectorAll('.client-testimonial');
    const totalWidth = testimonials.length * testimonials[0].offsetWidth;

    slider.style.width = `${totalWidth}px`;
  }, []);

  return (
    <div className="client-testimonials-slider animate" ref={sliderRef}>
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
  );
};

export default TestimonialsSlider;
