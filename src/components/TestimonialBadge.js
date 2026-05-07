'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TestimonialBadge = () => {
  const pathname = usePathname();

  // Hide on testimonials page
  if (pathname === '/testimonials') return null;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[1001] hidden lg:block">
      <Link 
        href="/testimonials"
        className="bg-[#7dc6db] text-white py-5 px-2 rounded-l-xl shadow-2xl hover:bg-opacity-90 transition-all flex flex-col items-center gap-2 group"
      >
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="group-hover:scale-125 transition-transform"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <span 
          className="text-[10.5px] font-bold tracking-[2px] uppercase" 
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          TESTIMONIALS
        </span>
      </Link>
    </div>
  );
};

export default TestimonialBadge;
