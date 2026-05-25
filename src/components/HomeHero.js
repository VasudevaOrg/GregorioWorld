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
            className="w-full h-full object-cover object-[center_5%] transition-opacity duration-700"
            onError={(e) => {
              e.target.src = '/images/corousals/IMAGE-1-FOR-HOME-PAGE.jpg'; // Fallback image if the main one fails to load
            }}
          />
        </picture>
        {/* Sophisticated directional gradient for legibility without washing out the whole image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/40 to-transparent md:from-white/40 md:via-transparent z-[1]" />
      </div>

      {/* Content Overlay - Bottom-left aligned across all devices */}
      <div className="absolute inset-0 z-10 flex items-end pb-8 md:pb-16 lg:pb-20">
        <div className="w-full px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="max-w-[900px] text-[#1a1a1a] text-left">
            <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-normal tracking-[-0.02em] uppercase leading-[1] mb-6 md:mb-10">
              <span className="block">THE SKY ISN'T</span>
              <span className="block">THE LIMIT...</span>
              <span className="block">IT'S THE</span>
              <span className="block">BEGINNING.</span>
            </h1>
            <p className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-light leading-[1.1] text-[#1a1a1a]">
              For the driven ones,<br />
              hungry to experience life<br />
              at its fullest
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeHero;

