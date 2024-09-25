import React from 'react';
import './About.css'; // Import the corresponding CSS file


const About = () => {
    return (

        <div className="about-section">
            <div className="text-section">
                <h2 className='ml-4 heading text-gray-800'>About Ezuca</h2>
                <p className='ml-4 mt-6 text-gray-500'>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                     <br /> officia deserunt mollit anim id est laborum. Sed ut perspiciatis <br /> unde omnis iste natus error sit voluptatem accusantium.
                </p>
                <div className="stats">
                    <div className="stat">
                        <h2>50M+</h2>
                        <p className='text-gray-500'>STUDENTS LEARNING</p>
                    </div>
                    <div className="stat">
                        <h2>30K+</h2>
                        <p className='text-gray-500'>ACTIVE COURSES</p>
                    </div>
                    <div className="stat">
                        <h2>340M+</h2>
                        <p className='text-gray-500'>INSTRUCTORS ONLINE</p>
                    </div>
                    <div className="stat">
                        <h2>20+</h2>
                        <p className='text-gray-500'>COUNTRY REACHED</p>
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img src="images/video-screenshot.png" alt="Person" />
                <div className="play-button"><img src="images/video-icon.png" alt="play button" /></div>
            </div>
        </div>
    );
};

export default About;