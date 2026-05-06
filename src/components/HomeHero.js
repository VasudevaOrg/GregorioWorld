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
            className="w-full h-full object-cover object-center sm:object-center"
            onError={(e) => {
              e.target.src = 'https://i0.wp.com/gregorio.world/wp-content/uploads/2021/10/IMAGE-1-FOR-HOME-PAGE.jpg?fit=2048%2C1536&ssl=1';
            }}
          />
        </picture>
      </div>

      {/* Content Overlay - Top-aligned on mobile strictly, center-aligned on tablet and desktop */}
      <div className="absolute inset-0 z-10 flex items-start sm:items-center pt-12 sm:pt-0">
        <div className="container mx-auto px-6 md:px-20 max-w-[1600px]">
          <div className="max-w-[700px] text-[#1a1a1a]">
            <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold tracking-[-0.02em] uppercase leading-[1.05] mb-6 md:mb-8 font-equip">
              YOU DIDN'T<br />
              COME THIS FAR<br />
              TO STOP NOW
            </h1>
            <p className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-light leading-tight text-[#1a1a1a]">
              For the driven ones<br />
              who refuse to plateau<br />
              and want more from life
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

