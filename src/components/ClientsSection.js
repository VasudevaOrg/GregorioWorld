'use client';
import React, { useRef, useState, useEffect } from 'react';

const ClientsSection = () => {
  const scrollRef = useRef(null);

  const originalLogos = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.jpg",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
    "/images/13.jpg",
    "/images/14.png",
    "/images/15.png",
    "/images/16.png",
    "/images/17.png",
    "/images/18.png",
    "/images/19.png",
    "/images/20.png",
    "/images/21.png",
    "/images/22.png",
    "/images/23.png"
  ];

  // Triple the list to enable a smooth "infinite" feel
  const clientLogos = [...originalLogos, ...originalLogos, ...originalLogos];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const item = container.querySelector('.client-item');
      if (!item) return;

      const itemWidth = item.offsetWidth + 48; // width + gap
      const currentScroll = container.scrollLeft;

      let scrollTo = direction === 'left'
        ? currentScroll - itemWidth
        : currentScroll + itemWidth;

      // Infinite loop check
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (scrollTo < 0) {
        // Jump to the middle set of images if we go too far left
        container.scrollLeft = container.scrollWidth / 3;
        scrollTo = container.scrollLeft - itemWidth;
      } else if (scrollTo > maxScroll) {
        // Jump to the middle set of images if we go too far right
        container.scrollLeft = container.scrollWidth / 3;
        scrollTo = container.scrollLeft + itemWidth;
      }

      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Set initial scroll to the middle group for infinite effect
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <h2 className="text-center text-[14px] md:text-[16px] font-bold tracking-[4px] uppercase mb-6 text-black">PAST CLIENTS</h2>

        <div className="relative flex items-center group px-8 md:px-16">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 text-black hover:scale-125 transition-transform z-10 p-2 opacity-60 hover:opacity-100"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide w-full gap-12 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clientLogos.map((src, index) => (
              <div
                key={index}
                className="client-item flex-shrink-0 w-[calc(50%-2rem)] md:w-[calc(33.33%-3rem)] lg:w-[calc(20%-2.4rem)] flex items-center justify-center transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 text-black hover:scale-125 transition-transform z-10 p-2 opacity-60 hover:opacity-100"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

