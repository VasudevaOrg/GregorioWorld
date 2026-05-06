'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'MENTORING', href: '/mentoring' },
    { name: 'EVENTS', href: '/events' },
    { name: 'ONLINE', href: '/online' },
    { name: 'ABOUT', href: '/#founders' },
    { name: 'TESTIMONIALS', href: '/testimonials' },
  ];

  return (
    <header
      className={`sticky top-0 z-[1000] transition-all duration-300 border-b border-gray-200/50 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm h-[70px]' : 'bg-white h-[90px]'
        } flex items-center`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between w-full max-w-[1440px]">
        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/MainLogo.png"
              alt="Gregorio World Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <nav>
            <ul className="flex gap-8 xl:gap-10 items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[11px] xl:text-[11.5px] font-bold tracking-[2.2px] text-[#003B4A] hover:opacity-60 transition-all whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Side: Spacer for Desktop / Toggle for Mobile */}
        <div className="flex-1 flex justify-end items-center">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-7 h-[1.5px] bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-[1.5px] bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-[1.5px] bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-x-0 top-[70px] bottom-0 bg-white z-[999] lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        <ul className="flex flex-col p-10 gap-2 text-left pt-12 overflow-y-auto h-full">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-6 text-[24px] font-bold tracking-[4px] text-[#1a1a1a] border-b border-gray-100 uppercase"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="mt-auto pb-20">
            <p className="text-[12px] text-gray-400 tracking-[3px] uppercase">© Gregorio 2026</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

