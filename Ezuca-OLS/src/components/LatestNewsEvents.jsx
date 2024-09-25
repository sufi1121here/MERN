import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const LatestNewsEvents = () => {
  const events = [
    {
      id: 1,
      image: "images/event-1.jpg",
      title: "The Complete Financial Analyst Training & Investing Course",
      date: "23 Mar",
      location: "40 Baria Street 133/2 New York City, US",
      duration: "10 Dec - 12 Dec",
    },
    {
      id: 2,
      image: "images/event-2.jpg",
      title: "Personalized online learning experience",
      date: "22 Mar 2018",
      author: "Ms. Lara Croft",
      comments: "02 Comments",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    },
    {
      id: 3,
      image: "images/event-3.jpg",
      title: "Which investment project should my company choose?",
      date: "22 Mar 2018",
      author: "Ms. Lara Croft",
      comments: "02 Comments",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    },
  ];

  return (
    <section className="latest-news-events">
      <div className="container mt-14 mx-auto px-4">
        <div className="text-lg">
          <h1 className="text-4xl text-gray-700 mb-6">
            Latest News & Events
          </h1>
        </div>    
        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-1/2 pr-4">
            <div className="flex flex-col h-full">
              <figure className="event-thumbnail relative mb-4">
                <a href="#">
                  <img src={events[0].image} alt={events[0].title} className="w-full h-auto rounded-lg" />
                </a>
                <div className="posted-date absolute top-0 left-0 bg-white p-2 rounded">
                  <div className="day text-lg font-bold">{events[0].date.split(" ")[0]}</div>
                  <div className="month text-xs">{events[0].date.split(" ")[1]}</div>
                </div>
              </figure>
              <div className="entry-header">
                <h2 className="entry-title text-lg font-semibold">
                  <a href="#">{events[0].title}</a>
                </h2>
                <div className="event-location flex items-center mt-2">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-green-600" />
                  <span className="text-gray-700">{events[0].location}</span>
                </div>
                <div className="event-duration flex items-center mt-1">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2 text-green-600" />
                  <span className="text-gray-700">{events[0].duration}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            <div className="event-content flex">
              <figure className="event-thumbnail w-1/3">
                <a href="#">
                  <img src={events[1].image} alt={events[1].title} className="w-full h-auto rounded-lg" />
                </a>
              </figure>
              <div className="event-content-wrap w-2/3 ml-4">
                <header className="entry-header">
                  <div className="posted-date flex items-center text-sm">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2 7 text-green-600" />
                    {events[1].date}
                  </div>
                  <h2 className="entry-title text-lg font-semibold mt-1">
                    <a href="#">{events[1].title}</a>
                  </h2>
                  <div className="entry-meta flex items-center mt-2">
                    <div className="post-author text-green-600">
                      <a href="#">{events[1].author}</a>
                    </div>
                    <div className="post-comments text-green-600 ml-2">{events[1].comments}</div>
                  </div>
                </header>
                <div className="entry-content mt-2">
                  <p className=" text-green-600">{events[1].description}</p>
                </div>
              </div>
            </div>

            <div className="event-content flex">
              <figure className="event-thumbnail w-1/3">
                <a href="#">
                  <img src={events[2].image} alt={events[2].title} className="w-full h-auto rounded-lg" />
                </a>
              </figure>
              <div className="event-content-wrap w-2/3 ml-4">
                <header className="entry-header">
                  <div className="posted-date flex items-center text-sm">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    {events[2].date}
                  </div>
                  <h2 className="entry-title text-lg font-semibold mt-1">
                    <a href="#">{events[2].title}</a>
                  </h2>
                  <div className="entry-meta flex items-center mt-2">
                    <div className="post-author  text-green-600">
                      <a href="#">{events[2].author}</a>
                    </div>
                    <div className="post-comments  text-green-600 ml-2">{events[2].comments}</div>
                  </div>
                </header>
                <div className="entry-content mt-2">
                  <p className=" text-green-600">{events[2].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestNewsEvents;