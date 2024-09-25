import React, { useState } from 'react';
import './testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Robert Stephens',
            image: 'images/user-1.jpg',
            description: 'Excepteur sint occaecat cupidatat non proident,.',
        },
        {
            name: 'Jane Doe',
            image: 'images/user-2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            name: 'John Smith',
            image: 'images/user-3.jpg',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="testimonial-slider">
            <div className="testimonial-images">
                {testimonials.map((testimonial, index) => (
                    <img
                        key={index}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`testimonial-image ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
            <div className="testimonial-description">
                <p>{testimonials[activeIndex].description}</p>
                <span>{testimonials[activeIndex].name}</span>
            </div>
        </div>
    );
};

export default Testimonials;
