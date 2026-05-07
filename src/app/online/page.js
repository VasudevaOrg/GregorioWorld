'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView as useFramerInView, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const FreeGiftPopup = ({ isOpen, onClose }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (isOpen && formRef.current) {
      // Clear previous script if any to prevent duplicates
      formRef.current.innerHTML = '';
      const script = document.createElement('script');
      script.src = 'https://welcome.breatheyourfreedom.com/forms/2148153117/embed.js';
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-[2000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            className="relative bg-white rounded-[24px] overflow-hidden max-w-[900px] w-full flex flex-col md:flex-row shadow-2xl border-[1px] border-black/10 max-h-[90vh] overflow-y-auto no-scrollbar z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-black/40 hover:text-black transition-colors bg-white/80 rounded-full p-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Left Image */}
            <div className="hidden md:block w-1/2 relative min-h-[500px]">
              <img
                src="https://i0.wp.com/gregorio.world/wp-content/uploads/2024/01/Screenshot-2023-05-14-143149.jpg?fit=660%2C993&ssl=1"
                alt="Free Gift"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center text-center justify-center bg-white">
              <img
                src="images/MainLogo.png"
                alt="Breathe Your Freedom Logo"
                className="w-24 md:w-32 mb-6 md:mb-8 object-contain"
              />
              <h2 className="text-[22px] md:text-[28px] font-bold text-black uppercase leading-tight mb-4 tracking-tight">
                GET INSTANT<br />BLISS NOW<br />WITH OUR <br />FREE GIFT!
              </h2>
              <p className="text-[14px] md:text-[17px] text-black/80 mb-6 md:mb-8 leading-snug">
                Plus access to our community<br />and exclusive offers.<br />No spam ever, promise.
              </p>

              <div ref={formRef} className="w-full">
                {/* External form script will load here */}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[100] cursor-pointer bg-white border border-black/10 text-black p-4 rounded-full shadow-lg hover:bg-gray-50 transition-all ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}
      title="Scroll to Top"
    >
      <svg className="w-5 h-5 rotate-180" viewBox="57 35.171 26 16.043">
        <path fill="currentColor" d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"></path>
      </svg>
    </motion.div>
  );
};

const WaitlistModal = ({ isOpen, onClose, selectedPlan }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    const templateParams = {
      user_email: email,
      selected_plan: selectedPlan,
      to_email: 'breatheyourfreedom@gmail.com',
    };

    try {
      await emailjs.send(
        'service_rjqjrum',
        'template_bde9ydl',
        templateParams,
        'X3FyHm9uEcvWl609O'
      );

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setEmail('');
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-[2100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            className="relative bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-12 max-w-[500px] w-full shadow-2xl border-[2px] md:border-[3px] border-black text-center max-h-[90vh] overflow-y-auto no-scrollbar z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-black/40 hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <h3 className="text-[24px] md:text-[28px] font-black text-black uppercase tracking-tight mb-2">Join the Waitlist</h3>
            <p className="text-[14px] md:text-[16px] text-black/60 mb-6 md:mb-8 leading-tight">
              You've selected the <span className="font-bold text-black">{selectedPlan}</span>.<br />
              Enter your email below and we'll be in touch!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#F5F5F5] border-[2px] border-black rounded-full px-6 py-4 text-[16px] font-bold text-black placeholder:text-black/30 outline-none focus:ring-2 focus:ring-[#FF8B64]/50 transition-all"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-[#FF8B64] hover:bg-[#ff7a4d] text-black font-black py-4 rounded-full text-[16px] md:text-[18px] uppercase tracking-widest transition-all border-[2px] border-black shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
              >
                {status === 'loading' ? 'SENDING...' : status === 'success' ? 'THANK YOU!' : 'JOIN WAITLIST'}
              </button>
            </form>

            {status === 'error' && (
              <p className="mt-4 text-red-500 font-bold text-[14px]">Oops! Something went wrong. Please try again.</p>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Counter = ({ target, duration = 1.2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(target);
      if (start === end) return;

      const totalFrames = 60 * duration;
      const increment = end / totalFrames;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const currentCount = Math.min(Math.floor(increment * frame), end);
        setCount(currentCount);

        if (frame >= totalFrames) {
          clearInterval(timer);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const FAQItem = ({ q, a, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start gap-4 w-full text-left group py-2"
      >
        <span className="mt-1 flex-shrink-0 text-[#F37250] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <svg width="18" height="18" viewBox="0 0 343.54 400" fill="currentColor">
            <path d="M323.27,161.14H201.92l-0.99,0.04l-9.04-101.84c-1.14-12.79-3.24-25.48-6.28-37.96l-1.72-7.05 c-2.04-8.34-9.5-14.2-18.09-14.2h0c-9.11,0-16.45,7.48-16.27,16.6l2.87,146.54l-115.03,7.82c-7.1,0.48-14.13,1.79-20.93,3.9 l-4.92,1.53C5.26,178.45,1,184.24,1,190.78v0c0,13.36,10.93,24.14,24.29,23.96l128.06-2.77l-3.1,158.66 c0,16.14,13.09,29.23,29.23,29.23h0c16.39,0,29.57-13.47,29.23-29.85l-3.18-151.44c-0.06-2.7-0.17-5.4-0.32-8.1l0.69-0.02 l118.08-4.04c10.97-0.38,19.66-9.37,19.66-20.34v-4.58C343.62,170.25,334.51,161.14,323.27,161.14z"></path>
          </svg>
        </span>
        <span className="text-[17px] md:text-[20px] font-medium text-black tracking-tight group-hover:text-black/70 transition-colors">
          {q}
        </span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden"
        >
          <div className="pl-9 pr-4 py-4 text-[14px] md:text-[17px] font-light text-black/80 leading-relaxed">
            {a}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const RotatingWords = () => {
  const words = ["Freedom", "Peace", "Joy", "Clarity", "Health"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="block"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const BenefitCard = ({ benefit, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: benefit.delay }}
      className={`bg-[#2D2D2D] rounded-[24px] p-4 pt-8 pb-6 flex flex-col items-center text-center relative transition-all duration-500 ${isExpanded ? 'h-auto min-h-[350px]' : 'h-[140px]'}`}
    >
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center border-[4px] border-[#FBF9F7] shadow-sm overflow-hidden"
        style={{ backgroundColor: benefit.iconColor, width: '74px', height: '74px' }}
      >
        {benefit.icon === 'productivity' ? (
          <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 2h14M5 22h14M6 2v6.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V2M18 2v6.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5V2M6 22v-6.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5V22M18 22v-6.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5V22" />
          </svg>
        ) : (
          <img src={benefit.icon} alt={benefit.title} className="w-11 h-11 object-contain filter brightness-0" />
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-[18px] md:text-[20px] font-bold text-white leading-[1.0] uppercase tracking-wide">
          {benefit.title}
        </h3>
        <p className="text-[18px] md:text-[20px] font-normal text-white leading-[1.0] lowercase">
          {benefit.subtitle}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-6"
          >
            <div className="text-[14px] md:text-[15px] font-light text-white/90 leading-relaxed space-y-4 px-2">
              {benefit.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-auto pt-4 text-[#437DCB] hover:text-[#5a97e6] transition-colors"
      >
        <span className="text-[24px] font-bold leading-none">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
    </motion.div>
  );
};

const OnlineJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const carouselRef = useRef(null);

  const benefitsData = [
    {
      title: "REDUCE",
      subtitle: "stress",
      iconColor: "#98C694",
      icon: "/images/yoga.svg",
      delay: 0.3,
      content: "Conscious breathing activates the vagus nerve to signal the parasympathetic nervous system to lower heart rate, cortisol, and blood pressure, bringing the body to a state of calm.\n\nFeel at peace, and be empowered to respond to life’s challenges with more adaptability, confidence and ease."
    },
    {
      title: "BOOST",
      subtitle: "health",
      iconColor: "#3B82F6",
      icon: "/images/health.svg",
      delay: 0.4,
      content: "By training the body’s autonomic response to stress you boost your immune system and drastically improve your health by reducing stress in the body and becoming more resilient.\n\nIgnite joy by increasing endorphins, dopamine, oxytocin, and serotonin (the feel-good hormones) and lower cortisol, adrenaline and noradrenaline, (the stress-related hormones)."
    },
    {
      title: "ELEVATE",
      subtitle: "relationships",
      iconColor: "#9484BC",
      icon: "/images/heart.svg",
      delay: 0.5,
      content: "Making yourself a priority to do breathwork, creates more clarity and inspires self-discovery to magnify your inner connection within yourself.\n\nConnect deeper within, to connect deeper with others, and approach relationships with more love, openness, and gratitude, for meaningful connections."
    },
    {
      title: "ENHANCE",
      subtitle: "productivity",
      iconColor: "#57B4A3",
      icon: "productivity",
      delay: 0.6,
      content: "Using the breath, you'll find the sweet spot of noradrenaline to reduce brain fog for mental clarity. You’ll minimize procrastination, to do more of the things you love, and less of the things you don’t.\n\nTake life and work decisions with more confidence and increase your focus and productivity to use your time more efficiently."
    }
  ];

  const scroll = (id, direction) => {
    const el = document.getElementById(id);
    if (!el) return;
    const gap = id === 'client-scroll' ? 48 : 24;
    const itemWidth = el.children[0].offsetWidth;
    const step = itemWidth + gap;
    const current = el.scrollLeft;

    let target;
    if (direction === 'left') {
      target = Math.ceil((current - step) / step) * step;
    } else {
      target = Math.floor((current + step) / step) * step;
    }

    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const el = carouselRef.current;
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.children[0].offsetWidth + 24; // card + gap
      const index = Math.round(scrollLeft / itemWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Trigger popup after 10 seconds
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const openWaitlist = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#E8E7E5]">
      <ScrollToTop />
      <FreeGiftPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Main-picture-min.jpeg"
            alt="MASTER YOUR HAPPINESS"
            className="w-full h-full object-[75%_center] md:object-center opacity-85 md:opacity-100 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-white/15 md:bg-transparent z-[1]" />
        </div>

        <div className="absolute inset-0 z-10 flex items-end pb-8 md:pb-12 lg:pb-20">
          <div className="container px-6 lg:pl-24 lg:pr-20 max-w-[1600px]">
            <div className="max-w-[1000px] text-[#1a1a1a] text-left mx-0">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[62px] font-normal tracking-[-0.02em] uppercase leading-[1.0] mb-6 md:mb-10 flex flex-col items-start">
                  <span className="block w-full">MASTER YOUR</span>
                  <span className="block w-full">HAPPINESS, REACH</span>
                  <span className="block w-full">ULTIMATE BLISS.</span>
                </h1>
                <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-normal leading-[1.1] text-[#1a1a1a] mb-10 md:mb-12 flex flex-col items-start">
                  <span>A Journey to achieve</span>
                  <span>your greatness</span>
                  <span>in record time</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex justify-start"
              >
                <button
                  onClick={scrollToPricing}
                  className="bg-[#FD916F] hover:bg-[#ff855c] text-black font-bold px-10 md:px-12 py-3.5 md:py-4 rounded-[30px] text-[16px] md:text-[18px] uppercase tracking-widest transition-all border-[2.5px] border-black shadow-lg active:scale-95"
                >
                  JOIN WAITLIST
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-8 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 md:px-20 max-w-[1000px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-1 mb-6"
          >
            <p className="text-[16px] md:text-[20px] font-normal leading-tight text-[#1a1a1a] mb-4">
              Breathwork and meditation<br />
              don't always live up to the hype - here's why.
            </p>
            <p className="text-[15px] md:text-[18px] font-normal text-black/80">
              -It's too <span className="font-bold">boring.</span>
            </p>
            <p className="text-[15px] md:text-[18px] font-normal text-black/80">
              -You're too <span className="font-bold">busy.</span>
            </p>
            <p className="text-[15px] md:text-[18px] font-normal text-black/80">
              -It's too <span className="font-bold">complicated</span> or spiritual, and <span className="font-bold">doesn't work.</span>
            </p>

            <div className="pt-4 space-y-1">
              <p className="text-[16px] md:text-[20px] font-normal leading-tight text-[#1a1a1a]">
                If you're looking for an easy way to tap into pure bliss and activate your joy<br />
                without drugs, shamans or retreats...
              </p>
              <p className="text-[18px] md:text-[22px] font-bold text-[#1a1a1a] uppercase tracking-wide">
                This page holds the key.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center my-4"
          >
            <img src="/images/MainLogo.png" alt="Logo" className="w-16 h-16 object-contain opacity-40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-1.5 max-w-[600px] mx-auto"
          >
            <p className="text-[15px] md:text-[20px] font-normal text-[#1a1a1a]">Are you ready to stop feeling overwhelmed or stressed by daily life?</p>
            <p className="text-[15px] md:text-[20px] font-normal text-[#1a1a1a]">Want to prioritize your health without sacrificing fun?</p>
            <p className="text-[15px] md:text-[20px] font-normal text-[#1a1a1a]">Are you having trouble getting quality sleep?</p>
            <p className="text-[15px] md:text-[20px] font-normal text-[#1a1a1a]">Are you tired of feeling disconnected from those closest to you?</p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 md:px-20 text-center max-w-[1000px]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-1">
            <h2 className="text-[24px] md:text-[30px] font-light text-[#1a1a1a] leading-tight">A new era of self-development will<br />breathe life into your journey with our</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="mb-6">
            <h2 className="text-[24px] md:text-[30px] font-bold text-[#7dc6db] uppercase tracking-wide">fun meditation approach.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 border border-gray-100 group cursor-pointer">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/9M54mSqhEWU?si=GzGjG0jZ9-jZ9jZ9&autoplay=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className="space-y-0.5 mb-6">
            <h2 className="text-[17px] md:text-[20px] font-light text-[#1a1a1a]">Become the person you were meant to be in only a few minutes per week with</h2>
            <h2 className="text-[22px] md:text-[28px] font-bold text-[#7dc6db] uppercase tracking-wider">breathe your freedom,</h2>
            <h2 className="text-[17px] md:text-[20px] font-light text-[#1a1a1a]">our accessible breathwork program to feel joy, every day.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} className="mb-8">
            <button onClick={scrollToPricing} className="bg-[#FD916F] hover:bg-[#ff855c] text-black font-bold px-10 py-3 rounded-[30px] text-[16px] uppercase tracking-widest transition-all border-[2px] border-black shadow-md hover:translate-y-[-3px]">JOIN WAITLIST</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-3">
            <h2 className="text-[20px] md:text-[24px] font-light text-[#1a1a1a] italic">A little taste of BYF</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} className="w-full max-w-[600px] mx-auto pb-4">
            <audio className="w-full h-14" controls src="/audio/program_audio.mp3">Your browser does not support the audio element.</audio>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-10 bg-[#B9D1E6] scroll-mt-20">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 h-[80px] md:h-[100px] flex flex-col items-center justify-center"
          >
            <div className="text-[28px] md:text-[42px] font-black text-[#1a1a1a] uppercase leading-tight mb-1 tracking-tight flex items-center justify-center gap-3">
              <span className="relative h-[40px] md:h-[60px] overflow-hidden inline-flex items-center">
                <RotatingWords />
              </span>
            </div>
            <h2 className="text-[18px] md:text-[24px] font-light text-[#1a1a1a] mt-2">is just a few breaths away!</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 max-w-[950px] mx-auto mb-10 items-stretch">
            {/* Essential Card */}
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="bg-white rounded-[30px] p-6 border-[2px] border-black flex flex-col items-center shadow-lg relative overflow-hidden">
              <h3 className="text-[22px] font-black uppercase mb-3 tracking-normal text-black">ESSENTIAL</h3>
              <div className="text-[14px] space-y-0.5 mb-4 font-light text-black text-center">
                <p>12 meditation (3 levels)</p>
                <p>3 weekly challenges</p>
                <p>2+ hours of content</p>
              </div>
              <div className="mb-4">
                <p className="text-[18px] font-black uppercase text-black">Total Value:</p>
                <div className="relative inline-block"><p className="text-[24px] font-black text-black tracking-tight">$146</p><div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#ff3b30] -translate-y-1/2"></div></div>
              </div>
              <div className="mb-5">
                <p className="text-[20px] font-black text-[#6FA8DC] tracking-tight">Limited Offer:</p>
                <p className="text-[48px] font-black leading-none text-black">$37</p>
              </div>
              <div className="w-full text-center mb-6">
                <p className="text-[18px] font-black mb-3 text-black">Bonuses:</p>
                <div className="inline-block text-left">
                  <div className="flex items-center gap-2 mb-1.5"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">De-stress & Relax Meditation</span></div>
                  <div className="flex items-center gap-2"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">Breathe! Intro to Breathwork PDF</span></div>
                </div>
              </div>
              <button onClick={() => openWaitlist('ESSENTIAL Plan ($37)')} className="mt-auto w-[90%] bg-[#FF8B64] hover:bg-[#ff7a4d] text-black font-black py-3 rounded-[30px] text-[17px] uppercase tracking-normal transition-all border-[2px] border-black shadow-[0_3px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px]">JOIN WAITLIST</button>
            </motion.div>

            {/* Growth Card */}
            <motion.div initial={{ opacity: 0, y: 120 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} className="bg-white rounded-[30px] p-6 border-[2px] border-black flex flex-col items-center shadow-2xl relative z-10 md:scale-[1.05]">
              <h3 className="text-[22px] font-black uppercase mb-3 tracking-normal text-black">GROWTH</h3>
              <div className="text-[14px] space-y-0.5 mb-4 font-light text-black text-center">
                <p>21 meditation (6 levels)</p>
                <p>6 weekly challenges</p>
                <p>6+ hours of content</p>
              </div>
              <div className="mb-4">
                <p className="text-[18px] font-black uppercase text-black">Total Value:</p>
                <div className="relative inline-block"><p className="text-[24px] font-black text-black tracking-tight">$465</p><div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#ff3b30] -translate-y-1/2"></div></div>
              </div>
              <div className="mb-5">
                <p className="text-[20px] font-black text-[#6FA8DC] tracking-tight">Limited Offer:</p>
                <p className="text-[48px] font-black leading-none text-black">$97</p>
                <p className="text-[12px] font-light mt-1 italic text-gray-500">or 4 payments of $37</p>
              </div>
              <div className="w-full text-center mb-6">
                <p className="text-[18px] font-black mb-3 text-black">Bonuses:</p>
                <div className="inline-block text-left">
                  <div className="flex items-center gap-2 mb-1.5"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">Everything in Essentials, plus...</span></div>
                  <div className="flex items-center gap-2 mb-1.5"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">The Art of Love LIVE Webinar</span></div>
                  <div className="flex items-center gap-2 mb-1.5"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">Level 5 Plus: Instant Power</span></div>
                  <div className="flex items-center gap-2"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">300-page guide for wellbeing</span></div>
                </div>
              </div>
              <div className="mb-2 text-[#FF8B64] font-black text-[12px] uppercase tracking-widest">Most popular</div>
              <button onClick={() => openWaitlist('GROWTH Plan ($97)')} className="w-[90%] bg-[#FF8B64] hover:bg-[#ff7a4d] text-black font-black py-3 rounded-[30px] text-[17px] uppercase tracking-normal transition-all border-[2px] border-black shadow-[0_3px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px]">JOIN WAITLIST</button>
            </motion.div>

            {/* Mastery Card */}
            <motion.div initial={{ opacity: 0, y: 140 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} className="bg-white rounded-[30px] p-6 border-[2px] border-black flex flex-col items-center shadow-lg relative">
              <h3 className="text-[22px] font-black uppercase mb-3 tracking-normal text-black">MASTERY</h3>
              <div className="text-[14px] space-y-0.5 mb-4 font-light text-black text-center">
                <p>34 meditation (10 levels)</p>
                <p>10 weekly challenges</p>
                <p>15+ hours of content</p>
              </div>
              <div className="mb-4">
                <p className="text-[18px] font-black uppercase text-black">Total Value:</p>
                <div className="relative inline-block"><p className="text-[24px] font-black text-black tracking-tight">$985</p><div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#ff3b30] -translate-y-1/2"></div></div>
              </div>
              <div className="mb-5">
                <p className="text-[20px] font-black text-[#6FA8DC] tracking-tight">Limited Offer:</p>
                <p className="text-[48px] font-black leading-none text-black">$197</p>
                <p className="text-[12px] font-light mt-1 italic text-gray-500">or 8 payments of $37</p>
              </div>
              <div className="w-full text-center mb-6">
                <p className="text-[18px] font-black mb-3 text-black">Bonuses:</p>
                <div className="inline-block text-left">
                  <div className="flex items-center gap-2 mb-1.5"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">Everything in Growth, plus...</span></div>
                  <div className="flex items-center gap-2 mb-1.5"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">LIVE Breathwork group session</span></div>
                  <div className="flex items-center gap-2"><svg className="w-4 h-4 text-[#34c759]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg><span className="text-[13px] font-medium text-black">7 Guided Meditation Bundle</span></div>
                </div>
              </div>
              <button onClick={() => openWaitlist('MASTERY Plan ($197)')} className="mt-auto w-[90%] bg-[#FF8B64] hover:bg-[#ff7a4d] text-black font-black py-3 rounded-[30px] text-[17px] uppercase tracking-normal transition-all border-[2px] border-black shadow-[0_3px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px]">JOIN WAITLIST</button>
            </motion.div>
          </div>

          <div className="space-y-4 max-w-[800px] mx-auto">
            <motion.h3 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-[22px] md:text-[32px] font-bold text-[#1a1a1a]">30 day money back guaranteed</motion.h3>
            <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="space-y-1">
              <p className="text-[16px] md:text-[22px] font-light text-[#1a1a1a]">No time? No worries.</p>
              <p className="text-[16px] md:text-[22px] font-bold text-[#1a1a1a] uppercase tracking-wide">Self-paced for today's busy life.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#FBF9F7]">
        <div className="container px-6 mx-auto max-w-[1100px]">
          <div className="text-center mb-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[26px] md:text-[30px] font-medium text-black mb-1">Benefits of</motion.h2>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[32px] md:text-[42px] font-bold text-[#437DCB] uppercase tracking-tight leading-tight">breathe your freedom</motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-16 md:gap-y-3">
            {benefitsData.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container px-6 mx-auto max-w-[1200px]">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[36px] md:text-[48px] font-black text-center uppercase text-[#1a1a1a] mb-16 tracking-tight">TESTIMONIALS</motion.h2>
          <div className="relative group px-4 md:px-16">
            <button onClick={() => scroll('testimonial-carousel', 'left')} className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 text-[#7dc6db] hover:scale-125 transition-transform z-10 p-2"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <div id="testimonial-carousel" ref={carouselRef} onScroll={handleScroll} className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                { text: "An experience of Union, liberation, power, and surrender.<br><br>One of the most magical journeys of your life.", name: "David Block", role: "Composer/Producer", image: "/images/david-block-testimonial-op.jpg" },
                { text: "BYF helped me heal physically, spiritually and emotionally.<br><br>It’s priceless!", name: "Jacqueline Matos", role: "Project Manager", image: "/images/jaqueline-matos-op.jpg" },
                { text: "Driven by professionals like Gregorio and Andrea, you can reach a new level of energy.<br><br>Good food for the soul.", name: "Mario Almondo", role: "Former COO Ferrari", image: "/images/licensed-image-op.jpg" },
                { text: "As a beginner, I highly recommend the course.<br><br>It calmed my mind, had better sleep, and reached a state of bliss.", name: "Jennie Tolfa", role: "Project Architect", image: "/images/jenny-tolfa-op.jpg" }
              ].map((testimonial, index) => (
                <div key={index} className="min-w-full md:min-w-[calc(33.333%-16px)] snap-center">
                  <div className="bg-[#f9f7f2] p-6 rounded-[12px] h-full flex flex-col items-start text-left">
                    <div className="mb-3"><svg width="35" height="28" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 0C5.14873 0 0 5.14873 0 11.5V35H17.5V11.5H8.75C8.75 9.96522 9.96522 8.75 11.5 8.75V0ZM39 0C32.6487 0 27.5 5.14873 27.5 11.5V35H45V11.5H36.25C36.25 9.96522 37.4652 8.75 39 8.75V0Z" fill="black" /></svg></div>
                    <div className="text-[17px] md:text-[18px] font-bold text-black mb-5 leading-[1.3] tracking-tight" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                    <div className="mt-auto flex flex-col items-start gap-3 w-full">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 border border-gray-200"><img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://secure.gravatar.com/avatar/6a610eda?s=150&d=mm&r=g"; }} /></div>
                      <div className="w-full"><h4 className="text-[15px] font-bold text-black leading-tight mb-0.5">{testimonial.name}</h4><p className="text-[12px] text-black/70 leading-tight font-normal">{testimonial.role}</p></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => scroll('testimonial-carousel', 'right')} className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 text-[#7dc6db] hover:scale-125 transition-transform z-10 p-2"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
            <div className="flex justify-center mt-8">
              <button onClick={scrollToPricing} className="bg-[#FF8B64] hover:bg-[#ff7a4d] text-black font-black px-12 py-4 rounded-full text-[18px] uppercase transition-all border-[2px] border-black shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] tracking-wide">JOIN WAITLIST</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section 2 */}
      <section className="py-12 bg-[#FBF9F7]">
        <div className="container px-6 mx-auto max-w-[1000px] text-center">
          <motion.h2 className="text-[24px] md:text-[36px] font-normal text-black mb-10 leading-[1.1] max-w-[800px] mx-auto uppercase">Join thousands around the world who have used our work to upgrade their lives.</motion.h2>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <div className="flex items-center gap-4 md:gap-6 w-full max-w-[400px] md:max-w-[500px] mx-auto">
              <span className="text-[40px] md:text-[64px] font-black text-[#437DCB] leading-none min-w-[140px] md:min-w-[200px] text-right"><Counter target="8500" suffix="+" /></span>
              <p className="text-[16px] md:text-[22px] font-bold text-black text-left">Lives upgraded</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6 w-full max-w-[400px] md:max-w-[500px] mx-auto">
              <span className="text-[40px] md:text-[64px] font-black text-[#437DCB] leading-none min-w-[140px] md:min-w-[200px] text-right"><Counter target="18" suffix="+" duration={0.8} /></span>
              <p className="text-[16px] md:text-[22px] font-bold text-black text-left">Years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="pt-10 pb-20 bg-[#FBF9F7]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <h2 className="text-center text-[24px] md:text-[34px] font-black tracking-[6px] uppercase mb-4 text-black">OUR CLIENTS</h2>
          <div className="relative flex items-center group px-4 md:px-12">
            <button onClick={() => scroll('client-scroll', 'left')} className="absolute left-0 text-black hover:scale-125 transition-transform z-10 p-2 opacity-40 hover:opacity-100"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <div id="client-scroll" className="flex overflow-x-auto scrollbar-hide w-full gap-12 scroll-smooth no-scrollbar snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[...Array(23)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-[calc(33.333%-32px)] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 snap-center">
                  <img src={`/images/${i + 1}${i + 1 === 7 || i + 1 === 13 ? '.jpg' : '.png'}`} alt={`Client Logo ${i + 1}`} className="h-16 md:h-22 w-auto object-contain" />
                </div>
              ))}
              {[...Array(23)].map((_, i) => (
                <div key={`dup-${i}`} className="flex-shrink-0 w-full md:w-[calc(33.333%-32px)] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 snap-center">
                  <img src={`/images/${i + 1}${i + 1 === 7 || i + 1 === 13 ? '.jpg' : '.png'}`} alt={`Client Logo ${i + 1}`} className="h-16 md:h-22 w-auto object-contain" />
                </div>
              ))}
            </div>
            <button onClick={() => scroll('client-scroll', 'right')} className="absolute right-0 text-black hover:scale-125 transition-transform z-10 p-2 opacity-40 hover:opacity-100"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>
        </div>
      </section>

      {/* Fun Approach Section */}
      <section className="relative pt-12 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-[900px] text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h2 className="text-[22px] md:text-[28px] font-normal text-black mb-1 uppercase tracking-tight">What is the</h2>
            <h2 className="text-[32px] md:text-[44px] font-bold text-[#437DCB] uppercase tracking-tight leading-[1.1]">fun meditation approach?</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-[850px] mx-auto space-y-8 mb-10">
            <div className="flex flex-col items-center">
              <p className="text-[16px] md:text-[20px] font-normal text-black leading-relaxed">Think of our breathwork as the cool cousin of regular meditation.<br className="hidden md:block" />We are spicing up your practice with unexpected music from<br className="hidden md:block" />world-class artists so that it's less "blah" and more "ahhh."</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-[16px] md:text-[20px] font-normal text-black">Instead of feeling like a chore,</p>
                <h3 className="text-[28px] md:text-[38px] font-bold text-[#437DCB] uppercase tracking-tight leading-none">breathe your freedom</h3>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[16px] md:text-[20px] font-normal text-black leading-relaxed">is the program you'll actually look forward to<br className="hidden md:block" />as it's based on the concept of Blissipline.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center gap-8">
            <button onClick={scrollToPricing} className="bg-[#FF8B64] hover:bg-[#ff7a4d] text-black font-black px-10 py-3.5 rounded-full text-[16px] uppercase tracking-wide transition-all border-[2px] border-black shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px]">JOIN WAITLIST</button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-[#FBF9F7]">
        <div className="container mx-auto px-6 max-w-[900px]">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[24px] md:text-[32px] font-black text-center text-black uppercase tracking-tight mb-4">Still have questions?</motion.h2>
          <div className="space-y-4">
            {[
              { q: "Who is this program for?", a: (<div className="space-y-4"><p>This program is for anyone who wants to upgrade their lives, whether you’re new to meditation or an experienced seeker.</p><p>For beginners: We will help you get started with meditation, we offer tips and tricks that will jumpstart your journey to unlocking your potential.</p><p>To seasoned seekers: We can help deepen your practice and increase the benefits you get from breathwork. We’ll introduce new techniques that keep breathwork fresh and fun—so that it’s easy for you to do every day!</p></div>) },
              { q: "How long will it take to feel the benefits?", a: "Most people begin feeling the benefits of our breathwork techniques at the first session." },
              { q: "How is this different from other meditation programs?", a: "Breathe Your Freedom program was designed as a way to make meditation accessible, with our Fun Meditation Approach. Our unique way of teaching, combined with fantastic and diverse music, makes each session a unique, enjoyable journey." },
              { q: "What is the concept of Blissipline?", a: "Blissipline is a concept that revolutionizes traditional discipline, into an easier and more joyful practice. Following your highest excitement is foundational to finding hapinness in the process itself rather than focusing solely on having to do something to achieve the outcome. To live with more ease, we move from forcing to allowing. This involves being in connection with yourself, to do what will bring you the most joy, rather than simply doing things out of a sense of obligation or pressure. By cultivating a deeper sense of inner peace in all areas of life, you can experience more bliss." },
              { q: "Will I get tired of doing it every day?", a: "We know that sometimes people get bored and/or plateau in their practice. We want everyone to feel encouraged and excited to continue. That’s why we designed this program in a way that makes meditation fun again so you can get back on track to reaching your potential and accomplishing your goals without forcing it." },
              { q: "What if I don’t have time?", a: "Breathe Your Freedom Program is self-paced, so you can take as much time as you want. No matter how long it takes, do it on your own terms!" }
            ].map((item, index) => (
              <FAQItem key={index} q={item.q} a={item.a} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-12 md:py-20 bg-[#FBF9F7]">
        <div className="container mx-auto px-6 max-w-[900px] text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[28px] md:text-[36px] font-black text-black uppercase mb-10 tracking-tight">Meet Your Coaches</motion.h2>
          <div className="mb-12">
            <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src="https://i0.wp.com/gregorio.world/wp-content/uploads/2024/01/coaches.jpg" alt="Andrea and Gregorio" className="w-full h-auto rounded-[32px] shadow-2xl mx-auto max-w-[700px] border-[3px] border-black" />
          </div>
          <div className="max-w-[850px] mx-auto text-[16px] md:text-[20px] font-normal text-black leading-snug space-y-6">
            <p>Hi, we’re Andrea and Gregorio, founders of Breathe Your Freedom. We are passionate about helping people become their best selves.</p>
            <p>Before we discovered the power of breathwork life was very different.</p>
            <p>In 2014, Gregorio had a life-changing breathwork journey, where he experienced full oneness. It was love at first breath! He paused his career as an architect to pursue his life purpose of supporting others to connect to their hearts, one breath at a time.</p>
            <p>In 2018, Andrea was still struggling to take the leap and leave her 10-year corporate career at Calvin Klein and L’Oreal. After the Breath of One, she ignited her inner power to be of service to the world.</p>
            <div className="space-y-0.5">
              <p>We quickly realized, breathwork is one of the most accessible superpowers we have. Our job is to help you ignite that power to become the hero of your life.</p>
            </div>
            <p>A fun fact about us: We got married eight months after our first kiss.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
            <button onClick={scrollToPricing} className="bg-[#FF8B64] hover:bg-[#ff7a4d] text-black font-black px-12 py-4 rounded-full text-[18px] uppercase tracking-wider transition-all border-[2px] border-black shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px]">JOIN WAITLIST</button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default OnlineJourney;
