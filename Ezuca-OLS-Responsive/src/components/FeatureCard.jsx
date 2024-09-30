import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faBook, faAward, faChalkboardTeacher, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ icon, title, description }) => {
  return (
    <div className="border p-8 shadow-lg items-center text-left">
      <div className="text-green-500 text-3xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
const FeaturedCards = () => {
  const cards = [
    { icon: faUserGraduate, title: "Learn From The Experts", description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." },
    { icon: faBook, title: "Book Library & Store", description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." },
    { icon: faChalkboardTeacher, title: "Best Course Online", description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." },
    { icon: faAward, title: "Best Industry Leaders", description: "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour." }
  ];

  return (
    <div className=" bg-white pb-2">
      <div >
        <div className="grid border-collapse sm:grid-cols-5 lg:grid-cols-4">
          {cards.map((card, index) => (
            <>
            <Card key={index} icon={card.icon} title={card.title} description={card.description} />
            {/* <p>{icon: faArrowRight}</p> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;