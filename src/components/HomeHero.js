'use client';

const HomeHero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Background Image - Responsive Selection */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 639px)" srcSet="/images/smallHomeMain.png" />
          <img
            src="/images/homeMain.png"
            alt="YOU DIDN'T COME THIS FAR TO STOP NOW"
            className="w-full h-full transition-opacity duration-700"
            onError={(e) => {
              e.target.src = 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/IMAGE-1-FOR-HOME-PAGE.jpg?fit=2048%2C1536&ssl=1';
            }}
          />
        </picture>
        {/* Sophisticated directional gradient for legibility without washing out the whole image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/40 to-transparent md:from-white/40 md:via-transparent z-[1]" />
      </div>

      {/* Content Overlay - Bottom-left aligned across all devices */}
      <div className="absolute inset-0 z-10 flex items-end pb-12 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-6 md:px-20 max-w-[1600px]">
          <div className="max-w-[800px] text-[#1a1a1a] text-left">
            <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-normal tracking-[-0.02em] uppercase leading-[1] mb-6 md:mb-10">
              <span className="block whitespace-nowrap">THE SKY ISN'T</span>
              <span className="block whitespace-nowrap">THE LIMIT...</span>
              <span className="block whitespace-nowrap">IT'S THE</span>
              <span className="block whitespace-nowrap">BEGINNING.</span>
            </h1>
            <p className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-light leading-[1.1] text-[#1a1a1a]">
              For the driven ones,<br />
              hungry to experience life<br />
              at its fullest
            </p>
          </div>
        </div>
      </div>

      {/* Floating Side Button - Compact Size */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[1001] hidden lg:block">
        <button className="bg-[#7dc6db] text-white py-5 px-2 rounded-l-xl shadow-2xl hover:bg-opacity-90 transition-all flex flex-col items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-[10.5px] font-bold tracking-[2px] uppercase" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            TESTIMONIALS
          </span>
        </button>
      </div>
    </section>
  );
};

export default HomeHero;

