import React from 'react';

const InfoCards = () => {
    const cards = [
        {
            image: "images/1.jpg",
            title: "The Complete Android Developer Course",
            description: "Ms. Lara Croft / July 21, 2018",
            price: "$45",
            discount: "$68",
            rating: "★★★★☆ (4 votes)"
        },
        {
            image: "images/2.jpg",
            title: "The Ultimate Drawing Course",
            description: "Michelle Golden / Mar 14, 2018",
            price: "Free",
            discount: "",
            rating: "★★★★☆ (4 votes)"
        },
        {
            image: "images/3.jpg",
            title: "The Complete Digital Marketing Course",
            description: "Ms. Lucius / Dec 18, 2018",
            price: "$55",
            discount: "$78",
            rating: "★★★★☆ (4 votes)"
        },
        {
            image: "images/4.jpg",
            title: "The Unreal Engine Developer Course",
            description: "Mr. John Wick / Oct 17, 2018",
            price: "Free",
            discount: "",
            rating: "★★★★☆ (4 votes)"
        },
        {
            image: "images/5.jpg",
            title: "Progressive Web Apps (PWA) - The Complete Guide",
            description: "Mr. Tom Redder / Sep 14, 2018",
            price: "$38",
            discount: "$48",
            rating: "★★★★☆ (4 votes)"
        },
        {
            image: "images/6.jpg",
            title: "Cryptocurrency Investment Course 2018",
            description: "Russell Stephens / Nov 06, 2018",
            price: "Free",
            discount: "",
            rating: "★★★★☆ (4 votes)"
        },
    ];

    return (
        <>
        <div className='bg-gray-100 pt-8'><h1 className='text-4xl text-gray-800 pl-16 ml-16'>Featured Courses</h1></div>
        <div className="flex justify-center bg-gray-100">

            <div className="grid lg:grid-cols-3 gap-8  max-w-4xl px-4 my-10">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white hover:shadow-2xl shadow-lg overflow-hidden transition-shadow duration-300 ease-in-out">
                        <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
                        <div className="p-4 text-left">
                            <h3 className="text-xl text-gray-700 mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-green-500 text-lg font-bold">{card.price}</span>
                                {card.discount && <span className="text-gray-400 line-through">{card.discount}</span>}
                            </div>
                            <div className="text-yellow-500 text-sm">{card.rating}</div>
                        </div>
                    </div>
                ))}
            <button className='px-[40px] items-center course-button rounded-none border-2'>View All</button>
            </div>
        </div>
        </>
    );
};

export default InfoCards;
