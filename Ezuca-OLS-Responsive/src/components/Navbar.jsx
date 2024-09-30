import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="relative">


      {/* Top Bar */}
      <div className="bg-white pr-5 pl-5 shadow-md md:pr-12 md:pl-12 lg:pr-9 lg:pl-9">
        <div className="flex justify-between items-center flex-wrap ml-10 md:ml-16">


          <div className="flex items-center divide-x divide-gray-600">
            <div className="flex items-center pr-5 md:pr-6 lg:pr-8">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500 px-2 mr-2" />
              <a href="mailto:tuanna.design@gmail.com" className="text-black">tuanna.design@gmail.com</a>
            </div>
            <div className="flex items-center px-5 pl-4 md:pl-6 lg:pl-8">
              <FontAwesomeIcon icon={faPhone} className="text-green-500 px-2 mr-2" />
              <span>001-1234-88888</span>
            </div>
          </div>



          {/* style={{border:'1px solid red'}} */}

          <div className="flex items-center">
            <input type="search" placeholder="What would you like to learn?" className="text-sm border p-3 bg-blue-300 bg-opacity-10 outline-none"/>
            <button className="text-white bg-green-500 px-6 py-3">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <a href="#" className="text-lg text-gray-600 pl-5 ml-4 hover:text-gray-950 md:ml-6 lg:ml-8">Register</a>
            <span className="mx-2 text-lg">/</span>
            <a href="#" className="text-lg text-gray-600 hover:text-gray-950">Login</a>
          </div>
        </div>
      </div>





      <header className="bg-cover bg-center relative h-[110vh]" style={{ backgroundImage: "url('images/hero-bg.jpg')" }}>       
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

        

        <div className="absolute content-center top-0 h-24 left-0 w-full z-20 bg-white bg-opacity-30 ">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div><img src="images/foot-logo.png" alt="logo" /></div>
            
            <div className='flex space-x-20'>
            <ul className="flex gap-6 text-lg space-x-6">
              <li><a href="#" className="text-white hover:text-green-500">Home</a></li>
              <li><a href="#" className="text-white hover:text-green-500">About</a></li>
              <li><a href="#" className="text-white hover:text-green-500">Courses</a></li>
              <li><a href="#" className="text-white hover:text-green-500">Blog</a></li>
              <li><a href="#" className="text-white hover:text-green-500">Contact</a></li>
            </ul>
            <img className='size-4' src="images/bag.png" alt="" />
            </div>
          </div>
        </div>


       
       
          <div className="relative ml-14 sm:ml-8 z-10 flex flex-col items-start justify-center h-full text-left text-white px-12 max-w-[600px]">
            <p className='text-sm mt-5 mb-4 font-bold text-green-600' >GET STARTED WITH ONLINE COURSES</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
              Best Online <br /> Learning System
            </h1>
            <p className="text-sm md:text-xl mb-6 text-white">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </p>
            <a href="#" className="mt-4 border-solid border-2 border-green-600 text-sm font-semibold bg-transparent-500 px-8 py-5  hover:bg-green-500">
              Read More
            </a>
          </div>
      </header>
    </div>
  );
};
export default Navbar;
