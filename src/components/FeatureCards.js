'use client';
import React from 'react';

const FeatureCards = () => {
  const cards = [
    {
      title: 'Life Mentoring',
      image: '/images/home1.jpg',
      link: '/mentoring'
    },
    {
      title: 'Live Events',
      image: '/images/home2.jpg',
      link: '/events'
    },
    {
      title: 'Online Journey',
      image: '/images/home3.jpeg',
      link: '/online'
    }
  ];

  return (
    <section className="py-20 bg-[#E8E7E5]">
      <div className="container mx-auto px-4 max-w-[1400px]">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[42px] font-normal tracking-[-0.02em] uppercase mb-4 text-[#1a1a1a]">
            FROM ARCHITECT TO LIFE ARCHITECT
          </h2>
          <p className="text-[20px] md:text-[24px] font-light text-[#333]">
            Helping you design and build the life of your dreams.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Rounded Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[40px] mb-8 shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=800&q=80`;
                  }}
                />
              </div>

              {/* Title below image */}
              <h3 className="text-[28px] md:text-[32px] font-bold text-[#1a1a1a] mb-4">
                {card.title}
              </h3>

              {/* Pill Button */}
              <a
                href={card.link}
                className="px-8 py-1.5 border border-gray-400 text-gray-500 rounded-full text-[12px] font-light tracking-[1px] lowercase hover:bg-black hover:text-white hover:border-black transition-all duration-300"
              >
                explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

