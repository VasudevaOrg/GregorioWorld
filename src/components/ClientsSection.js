'use client';
import React, { useRef, useState, useEffect } from 'react';

const ClientsSection = () => {
  const scrollRef = useRef(null);

  const originalLogos = [
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-01-q0p6es9ibut92u4boqa51z8r5riohgwuic8f49w2yo.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-04-q0p6f3jklv8oy5nxuv5nvweaadz31u5mjw28vlfcw0.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-09-q0p6f96lqvgevtfqxxlfauz1up7ac0s0knz5r96zuo.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-02-q0p6fb2a4jizj1d0myeofuhz1gy0rezh8xa4pt47i8.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-06-q0p6fb2a4jizj1d0myeofuhz1gy0rezh8xa4pt47i8.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-07-q0p6erbo50ryr85ou7vihhhakdnb9rt467kxmzxh4w.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-12-q0p6fgpb9jqpgp4tq0ufut2qls681llv9p71lgvugw.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-03-q0p6eaekq04sy8u9l0k88lqzvfypf7xy3vu700mk8w.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/logos-clients-BYF-08-q0p6ejsymcho6cgm24mhxjdltaodk6z9h6d1ss8mio.png?w=1200&ssl=1",
    "https://i0.wp.com/gregorio.world/wp-content/uploads/elementor/thumbs/4-1-1-q0p6gdlnwqzqr1t1dx2ds2rve9o2j08h2811e5j2f4.png?w=1200&ssl=1"
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
                  className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform"
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

