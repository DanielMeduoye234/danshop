import React from "react";
import './happy.css'



const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    text: "Since integrating this solution into our workflow, we’ve experienced a significant improvement in efficiency and collaboration.",
    image: "images/sarah.jpg", // Replace with actual images
  },
  {
    name: "David Patel",
    role: "Project Manager",
    text: "I’ve tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
    image: "images/David.jpg",
  },
  {
    name: "Emily Carter",
    role: "Operations Manager",
    text: "The tool we’ve adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    image: "images/Emily.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2 className="title">What people say</h2>
      <p className="subtitle">
        Discover what our satisfied customers have to say about their
        experiences with our products/services.
      </p>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="avatar" />
            <h3 className="name">{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
