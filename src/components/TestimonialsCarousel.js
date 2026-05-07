'use client';
import React, { useRef, useEffect } from 'react';

const TestimonialsCarousel = ({ bgColor = 'bg-white' }) => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: 'Ronny Turiaf',
      role: 'NBA Champion | former LA Lakers Player',
      highlight: '‘Gregorio Avanzini is a warrior of light.',
      quote: 'I have no doubt he will help humanity going forward, in an amazing matter, by empowering others to reconnect to their hearts and souls. My life changed for the better by crossing paths with him.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/11/ronny-turiaf_blue.jpg'
    },
    // {
    //   name: 'Claire Fermont Langlais',
    //   role: 'VP - Aerin Estée Lauder | former Head of Innovation - Calvin Klein Fragrances',
    //   highlight: '‘Andrea is this shining star that brings purpose and intention to the next level.',
    //   quote: 'She found the courage and braved fear, overcoming darkness to build her light. Thank you for your inspiration and teachings. I follow your path and learn from it too.’',
    //   image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/claire-fermont.jpg'
    // },
    {
      name: 'Jeffrey Perlman',
      role: 'CSO - Mindvalley | former Global CMO - Zumba',
      highlight: '‘Gregorio will guide you through the fear and into the truth.',
      quote: 'I have come to realize that we are here to learn how to love, period. For those of us that have the courage to truly commit to this mandate, choose Gregorio as your coach.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/11/jeffrey-perlam.jpg'
    },
    {
      name: 'Jess Lively',
      role: 'Founder - The Lively Show',
      highlight: '‘An incredible experience, unlike anything I’ve ever tried.',
      quote: 'It was a deep, intense, and a powerful way to blow past the constraints of the mind into greater awareness.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/jess-lively-testimonial.jpg'
    },
    {
      name: 'David Block',
      role: 'Composer/Producer - The Human Experience - Gone Gone Beyond',
      highlight: '‘An experience of union, liberation, power, and surrender.',
      quote: 'Gregorio will guide you on one of the most magical journeys of your life.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/david-block-testimonial.jpg'
    },
    {
      name: 'Mark Lawrence',
      role: 'Founder and CEO - SpotHero',
      highlight: '‘Coaching with Gregorio has brought new heights to my life.',
      quote: 'He guides from the heart a profound way of thinking that can only be described as "Gregorio". He exudes warm energy that allows you to open up to find your inner truth.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/12/mark-lawrence.jpg'
    },
    // {
    //   name: 'Anna Vorrias',
    //   role: 'CMO - Ethique | former VP - Fresh LVMH',
    //   highlight: '‘Andrea works from the heart and sees limitless possibilities.',
    //   quote: 'She has the courage to do the work and bring those learning to everyone she touches. I feel lucky to be inspired and lifted by her. I\'m always looking forward to experiencing what she does next.’',
    //   image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/annavorrias.jpeg'
    // },
    {
      name: 'Nadav Wilf',
      role: 'Founder and CEO - Head Alignment Coach | former Chief Possibilities Officer - HeroX',
      highlight: '‘I don’t say this lightly, breathwork with Gregorio changed my life forever.',
      quote: 'I saw that there’s more than just our bodies and that I could go there anytime through meditation. Gregorio is a pure-hearted masterful facilitator that will take you to new heights.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/nadav-wilf-testimonial.jpg'
    },
    {
      name: 'Mario Almondo',
      role: 'General Manager of Performance Division - Brembo S.p.A | former COO Industrial Director SVP - Ferrari S.p.A',
      highlight: '‘Driven by professionals like Gregorio and Andrea, you’ll be part of a wide and energetic experience.',
      quote: 'Unsuspected intimate and refreshing stream of emotion. Good food for the soul.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/12/bcNMacmQQc6zMq5RFP9f_mario_brembo-modified.png'
    },
    {
      name: 'Helena Wasserman Erikson',
      role: 'Impact Investor | TEDx Speaker | Forbes 30 under 30',
      highlight: '‘I had one of the craziest experiences of my life.',
      quote: 'I experienced the oneness I had just read about and felt deeply connected with everyone in the world.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/11/helena.jpg'
    },
    {
      name: 'Andrea Aicaradi',
      role: 'VP of Growth - Neosensory Inc. | MIT Graduate',
      highlight: '‘A transformational experience that will unlock your hidden energy.',
      quote: 'Unlike many ‘holistic’ practices, it’s rooted in science. A mind-bending journey, inspiring even the most skeptical.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/andrea-aicardi-testimonial.jpg'
    },
    {
      name: 'Tom Chi',
      role: 'Founding Partner - At One Ventures | former Head of Experience - Google X',
      highlight: '‘Gregorio led a large group into a breathing exercise with a mixture of confidence, care, and joy.',
      quote: 'He is dedicated to being a skillful practitioner and guide.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/tom-chi-testimonial.png'
    },
    // {
    //   name: 'Jennie Tolfa',
    //   role: 'Project Architect - Adrian Smith + Gordon Gill',
    //   highlight: '‘As a beginner into meditation/breathwork, I highly recommend Breath your Freedom.',
    //   quote: 'I noticed the impact on different aspects from calming my mind to reaching a state of bliss. This is a truly unique, fun, community-based program accessible to all levels.’',
    //   image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/11/jenny-tolfa.jpg'
    // },
    {
      name: 'Andy Kaul',
      role: 'Manager - Microsoft Consulting | former Director SAM - Microsoft',
      highlight: '‘I highly recommend coaching with Gregorio!',
      quote: 'He unlocked new doors and advanced me tremendously. Embraced by a bubble of trust I opened up quickly and effortlessly working through tough questions finding surprisingly simple truths and new approaches that I pursued. A wonderful and enriching experience.’',
      image: 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/12/andy-kaul.jpg'
    }
  ];

  // Triple the list for infinite feel
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const item = container.querySelector('.testimonial-item');
      if (!item) return;

      const itemWidth = item.offsetWidth + 80; // width + gap
      const currentScroll = container.scrollLeft;

      let scrollTo = direction === 'left'
        ? currentScroll - itemWidth
        : currentScroll + itemWidth;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (scrollTo < 0) {
        container.scrollLeft = container.scrollWidth / 3;
        scrollTo = container.scrollLeft - itemWidth;
      } else if (scrollTo > maxScroll) {
        container.scrollLeft = container.scrollWidth / 3;
        scrollTo = container.scrollLeft + itemWidth;
      }

      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }
  }, []);

  return (
    <section className={`pt-10 pb-0 ${bgColor}`}>
      <div className="container mx-auto px-4 max-w-[1600px]">
        <h2 className="text-center text-[18px] font-bold tracking-[2px] uppercase mb-8 text-[#1a1a1a]">TESTIMONIALS</h2>

        <div className="relative flex items-center group px-6 md:px-16">
          {/* Light Blue Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 text-[#7dc6db] hover:scale-125 transition-transform z-10 p-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide w-full gap-16 md:gap-20 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayTestimonials.map((t, index) => (
              <div
                key={index}
                className="testimonial-item flex-shrink-0 w-full lg:w-[calc(50%-40px)] flex flex-row items-start gap-8 text-left snap-start"
              >
                {/* Image on the left - No grayscale/hover effect */}
                <div className="flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover shadow-sm"
                  />
                </div>

                {/* Content on the right */}
                <div className="flex flex-col pt-1">
                  <div className="text-[14px] md:text-[16px] leading-relaxed text-[#1a1a1a] mb-5 max-w-[480px]">
                    <span className="font-bold">{t.highlight}</span><br />
                    <span className="italic">{t.quote}</span>
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-black tracking-wide uppercase">{t.name}</h4>
                    <p className="text-[11px] text-gray-500 uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 text-[#7dc6db] hover:scale-125 transition-transform z-10 p-2"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsCarousel;

