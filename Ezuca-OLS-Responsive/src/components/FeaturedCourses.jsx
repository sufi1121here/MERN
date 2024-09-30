import React from 'react';
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  return (
    <div className="py-12 px-12">
      <div className="flex mb-10 mt-8">
        <h2 className="ml-4 text-4xl text-gray-600 ">Featured Courses</h2>
        <button className="px-[50px] course-button rounded-none border-2 ml-auto">
          View All
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mx-4">
        {/* Card 1 */}
        <div className="featured-course-card rounded-none flex overflow-hidden">
          <img src="images/1.jpg" alt="Course Image" className="w-1/2 h-64 object-cover" />
          <div className="p-4 w-2/3">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-gray-500 text-sm ml-2">(4 votes)</span>
            </div>
            <h3 className="text-xl text-gray-600 mb-2">The Complete Android Developer Course</h3>
            <p className="text-sm text-green-500"><i>Ms. Lara Croft</i></p>
            <p className="text-sm text-gray-500">/ July 21, 2018</p>
            <p className="text-yellow-500 font-bold text-lg mt-4">Free</p>
          </div>
        </div>



        
        {/* Card 2 */}
        <div className="featured-course-card rounded-none flex overflow-hidden">
          <img src="images/2.jpg" alt="Course Image" className="w-1/2 h-64 object-cover" />
          <div className="p-4 w-2/3">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-gray-500 text-sm ml-2">(4 votes)</span>
            </div>
            <h3 className="text-xl text-gray-600 mb-2">Learn Photoshop, Web Design & Profitable</h3>
            <p className="text-sm text-green-500"><i>Mr. John Wick</i></p>
            <p className="text-sm text-gray-500">/ Aug 21, 2018</p>
            <p className="text-green-600 font-bold text-lg mt-4">$32 <i><span className="text-gray-400 line-through">$59</span></i></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeaturedCourses;
