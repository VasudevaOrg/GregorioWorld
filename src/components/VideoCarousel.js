'use client';
import React, { useRef, useState, useEffect } from 'react';

const VideoCarousel = () => {
  const scrollRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 'AJf-fylSIdU', title: 'Anthony Trucks', thumb: '/images/anthony-trucks.jpg' },
    { id: 'XFb5KxD34oc', title: 'Elisa Rossi', thumb: '/images/elisa-rossi.jpg' },
    { id: 'mFiJnsZqwBs', title: 'Reggie Williams', thumb: '/images/reggie-williams.jpg' },
    { id: '-Io-4RYDyos', title: 'Rob Palomo', thumb: '/images/rob-palomo.jpg' },
    { id: 'Ppu74brp4Kk', title: 'Dina', thumb: '/images/dina.jpg' },
    { id: 'B14ikRKEcy0', title: 'Logan Sullivan', thumb: '/images/logan-sullivan.jpg' },
    { id: 'QKk5Pi01DxM', title: 'Anish', thumb: '/images/anish.jpg' },
    { id: 'oy_qGUIuG24', title: 'Marianne Coaching', thumb: '/images/marianne-coaching.jpg' },
    { id: 'fJ8Vd8ElKnA', title: 'June', thumb: '/images/june.jpg' },
    { id: '9d-MT_86M-w', title: 'Gigi', thumb: '/images/GIGI.jpg' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active index with scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.querySelector('.video-item')?.offsetWidth + 24 || 0;
      const newIndex = Math.round(scrollPosition / itemWidth) % videos.length;
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToVideo = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.querySelector('.video-item')?.offsetWidth + 24 || 0;
      container.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    }
  };

  // Double the list for infinite feel
  const displayVideos = [...videos, ...videos];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const item = container.querySelector('.video-item');
      if (!item) return;

      const itemWidth = item.offsetWidth + 24; // width + gap
      const currentScroll = container.scrollLeft;

      let scrollTo = direction === 'left'
        ? currentScroll - itemWidth
        : currentScroll + itemWidth;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (scrollTo < 0) {
        container.scrollLeft = container.scrollWidth / 2;
        scrollTo = container.scrollLeft - itemWidth;
      } else if (scrollTo > maxScroll) {
        container.scrollLeft = container.scrollWidth / 2;
        scrollTo = container.scrollLeft + itemWidth;
      }

      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <div className="relative flex items-center group px-6 md:px-12">
          {/* Arrow Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 text-black hover:scale-125 transition-transform z-10 p-2 opacity-40 hover:opacity-100"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide w-full gap-6 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayVideos.map((video, index) => (
              <div
                key={index}
                className="video-item flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[calc(33.333%-1rem)] aspect-video relative rounded-xl overflow-hidden cursor-pointer group/item shadow-lg"
                onClick={() => setSelectedVideo(video.id)}
              >
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/item:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center transition-all group-hover/item:scale-125 text-[#7dc6db]">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 text-black hover:scale-125 transition-transform z-10 p-2 opacity-40 hover:opacity-100"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToVideo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-black w-3' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal (Lightbox) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[2000] bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-[1200px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              className="absolute top-4 right-4 text-white hover:rotate-90 transition-all z-20"
              onClick={(e) => { e.stopPropagation(); setSelectedVideo(null); }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="w-full h-full border-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoCarousel;
