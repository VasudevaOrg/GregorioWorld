'use client';
import React, { useRef, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: 'David Block',
      role: 'Composer/Producer - The Human Experience - Gone Gone Beyond',
      highlight: 'An experience of Union, liberation, power, and surrender.',
      quote: 'One of the most magical journeys of your life.',
      image: '/images/david-block-testimonial-op.jpg'
    },
    {
      name: 'Jacqueline Matos',
      role: 'Conference Planner | Project Manager',
      highlight: 'BYF helped me heal physically, spiritually and emotionally.',
      quote: 'It’s priceless!',
      image: '/images/jaqueline-matos-op.jpg'
    },
    {
      name: 'Mario Almondo',
      role: 'GM of Performance Brembo Former COO Industrial Director SVP Ferrari',
      highlight: 'Driven by professionals like Gregorio and Andrea, you can reach a new level of energy.',
      quote: 'Good food for the soul.',
      image: '/images/licensed-image-op.jpg'
    },
    // {
    //   name: 'Jennie Tolfa',
    //   role: 'Project Architect - Adrian Smith + Gordon Gill',
    //   highlight: 'As a beginner, I highly recommend the course.',
    //   quote: 'It calmed my mind, had better sleep, and reached a state of bliss.',
    //   image: '/images/jenny-tolfa-op.jpg'
    // },
    {
      name: 'Nadav Wilf',
      role: 'Founder and CEO Head Alignment Coach Former Chief Possibilities Officer HeroX',
      highlight: 'I don’t say this lightly, it changed my life forever.',
      quote: 'Will take you to new heights.',
      image: '/images/nadav-wilf-testimonial-op.jpg'
    },
    {
      name: 'Jess Lively',
      role: 'Founder - The Lively Show',
      highlight: 'An incredible experience unlike anything I’ve ever tried.',
      quote: 'Powerful way to blow past constraints into greater awareness.',
      image: '/images/jess-lively-testimonial-op.jpg'
    },
    {
      name: 'Tom Chi',
      role: 'Founding Partner - At One Ventures | former Head of Experience - Google X',
      highlight: 'Gregorio leads a large group with a mixture of confidence, care, and joy.',
      quote: 'A skillful practitioner and guide.',
      image: '/images/tom-chi-testimonial.jpg'
    },
    {
      name: 'Marianne Wagner',
      role: 'Certified Coach and Trainer',
      highlight: 'Absolutely mind-blowing.',
      quote: 'Helped me in gaining more self-confidence to master my joy.',
      image: '/images/marianne-wagner.jpg'
    },
    {
      name: 'Andrea Aicardi',
      role: 'VP of Growth @ Neosensory Inc. MIT Graduate',
      highlight: 'Will unlock your hidden energy.',
      quote: 'A mind-bending journey that will inspire even the most skeptical audiences.',
      image: '/images/andrea-aicardi-testimonial-op.jpg'
    },
    {
      name: 'Felizia Baze',
      role: 'Violinist',
      highlight: 'BYF helped me to release stuck emotions,',
      quote: 'feel so much lighter and happier.',
      image: '/images/Copy-of-felizia-baze-op.jpg'
    },
    {
      name: 'David Langer',
      role: 'Founder @ Zesty Founding Partner @ Lionheart Ventures Oxford Graduate',
      highlight: 'The most powerful breathwork experience I’ve had.',
      quote: 'Sure to bring you more clarity and open your heart.',
      image: '/images/david-langer-testimonial-op.jpg'
    },
    {
      name: 'Arancha Muelas',
      role: 'Director, Brand & Content Strategy @ MadBlue Summit Former Director Global Brand Strategy @ Vistaprint',
      highlight: 'I witnessed the transformation of an entire group.',
      quote: 'A sense of connection I never experienced before.',
      image: '/images/Copy-of-arancha-op.jpg'
    },
    {
      name: 'Frederik Talloen',
      role: 'Best Selling Author Founder @ Freedom Mastery CEO @ Property Cashflow Experts LLC',
      highlight: 'I had one of the craziest experiences of my life.',
      quote: 'I experienced the oneness I had just read about.',
      image: '/images/fredrick.jpg'
    },
    {
      name: 'Helena Wasserman',
      role: 'Impact Investor TEDx Speaker Forbes 30 under 30',
      highlight: 'Left me feeling uplifted I had one of the craziest experiences of my life.',
      quote: 'I experienced the oneness I had just read about.',
      image: '/images/Copy-of-helena-op.jpg'
    },
    {
      name: 'Julian Tse',
      role: 'Speaker & Moderator @ Harvard Project for Asian and International Relationships Photographer',
      highlight: 'Left me feeling uplifted and renewed.',
      quote: 'Andrea and Gregorio are wonderful human beings with positive energy.',
      image: '/images/julian-tse-op.jpg'
    },
    {
      name: 'Simon Nicolas Pelland',
      role: 'Kinesiologist Personal Trainer',
      highlight: 'Truly life-changing.',
      quote: 'I am forever grateful for the impact you had on my life.',
      image: '/images/simon.jpg'
    },
    {
      name: 'David Block',
      role: 'Composer/Producer - The Human Experience - Gone Gone Beyond',
      highlight: 'An experience of Union, liberation, power, and surrender.',
      quote: 'One of the most magical journeys of your life.',
      image: '/images/david-block-testimonial-op.jpg'
    },
    {
      name: 'Jacqueline Matos',
      role: 'Conference Planner | Project Manager',
      highlight: 'BYF helped me heal physically, spiritually and emotionally.',
      quote: 'It’s priceless!',
      image: '/images/jaqueline-matos-op.jpg'
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
    <section className="py-10 bg-white">
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
            className="flex overflow-x-auto scrollbar-hide w-full gap-16 md:gap-20 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayTestimonials.map((t, index) => (
              <div
                key={index}
                className="testimonial-item flex-shrink-0 w-full md:w-[calc(50%-40px)] flex flex-row items-start gap-8 text-left"
              >
                {/* Image on the left - No grayscale/hover effect */}
                <div className="flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover shadow-sm"
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

        {/* Light Blue Pill Button */}
        <div className="flex justify-center mt-12">
          <a href="/testimonials" className="px-10 py-3 border border-[#7dc6db] text-[#7dc6db] rounded-full text-[11px] font-bold tracking-[2px] uppercase hover:bg-[#7dc6db] hover:text-white transition-all duration-300">
            ALL TESTIMONIALS
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

