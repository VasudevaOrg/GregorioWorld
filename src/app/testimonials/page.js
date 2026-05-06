'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const breathworkTestimonials = [
  {
    name: "Nadav Wilf",
    role: "Founder and CEO - Head Alignment Coach | former Chief Possibilities Officer - HeroX",
    text: "I don’t say this lightly, breathing with Gregorio changed my life forever. Just through breath, I traveled to a place in my mind's eye where I left my body and joined the spirit world. It showed me that there’s more to us than just our bodies and that I could go there anytime through meditation. Gregorio is a pure hearted masterful facilitator that will take you to new heights.",
    image: "/images/nadav-wilf-testimonial-op.jpg"
  },
  {
    name: "Helena Wasserman Erikson",
    role: "Impact Investor | TEDx Speaker | Forbes 30 under 30",
    text: "Breathing guided by Greogrio, I had one of the craziest experiences of my life. I was breathing sitting back to back with my husband and I had never felt so connected to him. I also felt deeply connected with everyone in the room and with everyone in the world. I had experienced the oneness I had just read about. It was so profound that I asked Gregorio to lead a session at our wedding. Then I brought Gregorio and Andrea to come lead a session at the opening of my company in Singapore and it was truly powerful.",
    image: "images/Copy-of-helena-op.jpg"
  },
  {
    name: "Mario Almondo",
    role: "General Manager of Performance Division - Brembo S.p.A | former COO Industrial Director Senior Vice President - Ferrari S.p.A",
    text: "Breath means life, we all know that. What we do not know maybe is that you can reach a new level of energy if you approach this ancestral/primordial exercise collectively driven by a professionals like Gregorio and Andrea. You'll be part of a wide and energetic experience capable of delivering unsuspected intimate and refreshing stream of emotion. Good food for soul.",
    image: "images/licensed-image-op.jpg"
  },
  {
    name: "Arancha Muelas",
    role: "Director, Brand & Content Strategy - MadBlue Summit | Former Director Global Brand Strategy at Vistaprint",
    text: "Gregorio is one of those extraordinary individuals that have conquered one of the most important lessons and the secret of life – live from your heart and never close! His story was an inspiration to find my own path, he lives in constant flow, projects light to the world and brightens the way for others. I did witness the transformation of an entire group while we performed the breath of one, leading to a sense of connection as never experienced. Together with Andrea, a passionate, courageous, sensitive, caring and absolutely gorgeous woman! they make magic balancing the power of masculine and feminine energies for co-creation and transformation!",
    image: "images/Copy-of-arancha-op.jpg"
  },
  {
    name: "David Block",
    role: "Composer/Producer - The Human Experience - Gone Gone Beyond",
    text: "We breathe all day and night so it’s easy to forget the transcendent power of breathwork. Breathe Of One is an experience of Union, liberation, power, and surrender. If you’ve never truly explored the power of the breath, Gregorio will guide you on one of the most magical journeys of your life.",
    image: "images/david-block-testimonial-op.jpg"
  },
  {
    name: "Felizia Baze",
    role: "Musician",
    text: "My experience with Breathe Your Freedom has helped me to release stuck emotions and energy and to feel so much lighter and happier in my life. It has become a precious tool for me to rest myself when I feel a little bit unbalanced. Andrea & Gregorio are such an inspiration. They are so loving and caring. With BYF they have created an incredible program and they have made me feel very welcomed and safe.",
    image: "images/Copy-of-felizia-baze-op.jpg"
  },
  {
    name: "Tom Chi",
    role: "Founding Partner - At One Ventures | former Head of Experience - Google X",
    text: "Gregorio lead a large group into a breathing exercise with a mixture of confidence, care, and joy. He is dedicated to being a skillful practitioner and guide.",
    image: "images/tom-chi-testimonial.jpg"
  },
  {
    name: "Andrea Aicardi",
    role: "VP of Growth - Neosensory Inc. | former Senior Manager, Strategy and Operations - SquareTrade I MIT Graduate",
    text: "Breath Of One is a transformational experience that will unlock your hidden energy. Unlike many so-called ‘holistic’ practices, BOO is rooted in solid scientific evidence and delivers a mind-bending journey that will inspire even the most skeptical audiences.",
    image: "/images/andrea-aicardi-testimonial-op.jpg"
  },
  {
    name: "Jess Lively",
    role: "Founder - The Lively Show",
    text: "Breath of One was an incredible experience unlike anything I’ve ever tried. It was a deep, intense, and powerful way to blow past the constraints of the mind into greater awareness.",
    image: "images/jess-lively-testimonial-op.jpg"
  },
  {
    name: "Julian Tse",
    role: "Speaker & Moderator - Harvard Project for Asian and International Relationships I Photographer | Oxford Graduate",
    text: "Andrea and Gregorio are wonderful human beings with so much positive energy and good hearts. Their group breathwork class left me feeling uplifted and renewed, and all of the group more connected to each other. Highly recommended and I can't wait for the next time!",
    image: "/images/julian-tse-op.jpg"
  },
  {
    name: "Frederik Talloen",
    role: "Best Selling Author and Founder - Freedom Mastery | CEO - Property Cashflow Experts LLC",
    text: "I had a profound experience during the ‘breath of one’!! I could feel how it was healing me on all levels, emotional, physical, mental and spiritually. I recommend everyone to experience it!",
    image: "images/fredrick.jpg"
  },
  {
    name: "David Langer",
    role: "Founder - Zesty | Founding Partner - Lionheart Ventures | Oxford Graduate",
    text: "Gregorio's Breath of One is the most powerful breathwork experience I've had and can only be compared with my most powerful medicine ceremonies. Gregorio's huge heart and passionate sessions are sure to bring you more clarity, open your heart and take you to realms not accessible in ordinary states of consciousness. Do it if you have the opportunity and take your loved ones along to share it with them!",
    image: "images/david-langer-testimonial-op.jpg"
  },
  {
    name: "Jacqueline Matos",
    role: "Conference Planner | Project Manager",
    text: "Doing Breathwork through Breath Your Freedom has helped me heal physically, spiritually and emotionally. In 2019, I was working at the Mexican border on a humanitarian mission when I developed acute bronchitis. As a result, I had a continuous phlegm that persisted for 2 years. After doing deep breathing with BYF, I noticed my lungs were clear and the phlegm was gone. Breathwork is also teaching me to live a lifestyle of self-love. Andrea and Gregorio’s sensual voices and beautiful music are my guide to be more aware of my spirit and emotions and also helps to clear my mind. Some nights while doing the breathwork I would start dancing spontaneously, other times I would cry tears of joy from overwhelming feelings of gratitude. Mostly, I enjoy being part of the global community with other amazing individuals throughout the world who are on the same journey. Andrea and Gregorio have created a truly special space, bringing us all together to share our experiences and making it so intimate it’s as if we are all sitting around the dinner table—BYF is priceless!",
    image: "images/jaqueline-matos-op.jpg"
  },
  {
    name: "Simon Nicolas Pelland",
    role: "Kinesiologist and Personal Trainer",
    text: "When people tell me they did breathwork, I always have questions of its quality because had the privilege of experiencing it with Gregorio Avanzini and was truly life-changing. The first time, I had the experience of not being afraid of a genetic life-ending disease that runs in my family called Huntington’s disease. The second experience of breathwork with him left me complete with no regrets or blame for my father or myself when he passed of that disease. AND in that same session, I discovered not only wanted to move to Bali, but it was a hell yeah for me. 4 months later, I sold all my things and made the leap. I am forever grateful for the care and integrity that he delivers in his work. Thank you for the impact you have had on my life. ❤️🙏🏼",
    image: "images/simon.jpg"
  },
  {
    name: "Jennie Tolfa",
    role: "Project Architect - Adrian Smith + Gordon Gill",
    text: "As a beginner into meditation and breathwork, I highly recommend the Breath your Freedom course. The guided music sessions were extremely powerful and I noticed the impact on different aspects from calming my mind before bed and staying asleep during the night, to reaching a state of bliss by being able to connect my mind, body and soul. This is a truly unique program and Gregorio and Andrea have created a fun, community based approach to breathwork and meditation that is accessible to all levels.",
    image: "images/jenny-tolfa-op.jpg"
  }
];

const coachingTestimonials = [
  { name: "Jeffrey Perlman", role: "CSO - Mindvalley | former Global CMO - Zumba", text: "Gregorio will guide you through the fear and into the truth. I have come to realize that we are here to learn how to love, period. For those of us that have the courage to truly commit to this mandate, choose Gregorio as your coach.", image: "https://i0.wp.com/gregorio.world/wp-content/uploads/2021/11/jeffrey-perlam.jpg" },
  { name: "Ronny Turiaf", role: "NBA Champion | former LA Lakers Player", text: "‘Gregorio Avanzini is a warrior of light. I have no doubt he will help humanity going forward, in an amazing matter, by empowering others to reconnect to their hearts and souls. My life changed for the better by crossing paths with him.’", image: "https://i0.wp.com/gregorio.world/wp-content/uploads/2021/11/ronny-turiaf_blue.jpg" },
  {
    name: "Andy Kaul",
    role: "Manager - Microsoft Consulting I former Director SAM - Microsoft",
    text: "My coaching sessions with Gregorio unlocked new doors for my personal growth and advanced me tremendously - I highly recommend working with him! His presence radiates confidence, sincerity, wisdom, love and purpose. Embraced by a bubble of trust I opened up quickly almost effortlessly worked through tough questions finding surprisingly simple truths and new approaches I was able to pursue. A wonderful and enriching experience.",
    image: "https://i0.wp.com/gregorio.world/wp-content/uploads/2021/12/andy-kaul.jpg"
  },
  {
    name: "Arancha Muelas",
    role: "Director, Brand & Content Strategy - MadBlue Summit | Former Director Global Brand Strategy at Vistaprint",
    text: "Gregorio is one of those extraordinary individuals that have conquered one of the most important lessons and the secret of life – live from your heart and never close! His story was an inspiration to find my own path, he lives in constant flow, projects light to the world and brightens the way for others.",
    image: "images/Copy-of-arancha-op.jpg"
  },
  {
    name: "Mark Lawrence",
    role: "Founder and CEO - SpotHero",
    text: "Coaching with Gregorio has brought new heights to my life. He radiates warmth and energy that allows you to open up to find the inner truth from within. He's incredibly gifted at providing unique insights and shared experiences to guide and enhance your life. He isn't afraid to challenge pre-conceived thoughts and notions in a tactful and unique way, even if it's hard to hear. As new thoughts and \"original content\" are really what helps us evolve and move forward, Gregorio is able to evoke the path from the heart and guide a profound way of thinking that can only be described as \"Gregorio\".",
    image: "https://i0.wp.com/gregorio.world/wp-content/uploads/2021/12/mark-lawrence.jpg"
  }
];

const breathworkVideos = [
  { id: 'XFb5KxD34oc', title: 'Elisa Rossi', thumb: '/images/elisa-rossi.jpg' },
  { id: '9d-MT_86M-w', title: 'Gigi', thumb: '/images/GIGI.jpg' },
  { id: 'B14ikRKEcy0', title: 'Logan Sullivan', thumb: '/images/logan-sullivan.jpg' },
  //{ id: 'oy_qGUIuG24', title: 'Marianne', thumb: '/images/marianne-coaching.jpg' },
  { id: 'fJ8Vd8ElKnA', title: 'June', thumb: '/images/june.jpg' },
  { id: 'Andrei', title: 'Andrei', thumb: '/images/111.jpg' },
  { id: 'Talia Serene', title: 'Talia Serene', thumb: '/images/222.jpg' },
  { id: 'Julian', title: 'Julian', thumb: '/images/33.jpg' }
];

const coachingVideos = [
  { id: 'AJf-fylSIdU', title: 'Anthony Trucks', thumb: '/images/anthony-trucks.jpg' },
  { id: 'mFiJnsZqwBs', title: 'Reggie Williams', thumb: '/images/reggie-williams.jpg' },
  //{ id: 'Dina', title: 'Dina', thumb: '/images/dina.jpg' },
  { id: '-Io-4RYDyos', title: 'Rob Palomo', thumb: '/images/rob-palomo.jpg' },
  { id: 'Anish', title: 'Anish', thumb: '/images/anish.jpg' },
  { id: 'Madalina and Chris', title: 'Madalina & Chris', thumb: '/images/3333.jpg' }
];

const eventVideos = [
  { id: 'Andrea & Frank', title: 'Andrea & Frank', thumb: '/images/11111.jpg' },
  { id: 'Somi', title: 'Somi', thumb: '/images/22222.png' },
  { id: 'Cynthia', title: 'Cynthia', thumb: '/images/33333.jpg' },
  { id: 'Video 4', title: 'Video 4', thumb: '/images/44444.jpg' }
];

const VideoCarousel = ({ items, onVideoClick }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.offsetWidth;
      const currentScroll = container.scrollLeft;
      const target = direction === 'left' ? currentScroll - itemWidth : currentScroll + itemWidth;
      container.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.scrollWidth / items.length;
      const index = Math.round(container.scrollLeft / itemWidth);
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative group px-2 md:px-12 py-4">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[#7dc6db] hover:scale-125 transition-all z-10 p-1 md:p-2 opacity-60 hover:opacity-100"
      >
        <svg width="30" height="30" className="md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-3 md:gap-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((video, i) => (
          <div
            key={i}
            onClick={() => onVideoClick(video.id)}
            className="min-w-[calc(100%-40px)] md:min-w-[calc(25%-12px)] aspect-video bg-[#E5E5E5] rounded-[12px] flex flex-col items-center justify-center relative overflow-hidden group/video cursor-pointer snap-start shadow-sm"
          >
            <img src={video.thumb} alt={video.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-110" onError={(e) => { e.target.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`; }} />
            <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors flex items-center justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#7dc6db] transition-transform group-hover/video:scale-125 drop-shadow-lg">
                <svg width="40" height="40" className="md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <div className="absolute bottom-3 left-4 right-4 text-center pointer-events-none">
              <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white drop-shadow-md">{video.title}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[#7dc6db] hover:scale-125 transition-all z-10 p-1 md:p-2 opacity-60 hover:opacity-100"
      >
        <svg width="30" height="30" className="md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <div className="flex justify-center gap-3 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (scrollRef.current) {
                const container = scrollRef.current;
                const itemWidth = container.scrollWidth / items.length;
                container.scrollTo({ left: i * itemWidth, behavior: 'smooth' });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-black w-3' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[100vh] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://i0.wp.com/gregorio.world/wp-content/uploads/2021/12/header-testimonials.jpg?fit=1920%2C1282&ssl=1")' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-[32px] sm:text-[40px] md:text-[60px] font-bold uppercase tracking-tighter mt-[100px] md:mt-[190px]">testimonials</h1>
        </div>
      </section>

      {/* LIFE MENTORING Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-[24px] md:text-[30px] font-bold uppercase text-black mb-10 md:mb-16 tracking-widest text-center">LIFE MENTORING</h2>
          <div className="space-y-6">
            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coachingTestimonials.slice(0, 3).map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F1F1EE] p-5 md:p-7 flex flex-col rounded-[12px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-grow">
                    <p className="text-[15px] md:text-[16px] font-normal text-black/80 leading-[1.6] mb-5 text-center font-serif">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-[90px] h-[90px] rounded-full object-cover shadow-lg" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#68B7D4] text-[16px] md:text-[17px] font-bold tracking-tight mb-0.5">{t.name}</h3>
                      <p className="text-[11px] md:text-[12px] font-medium text-black/70 leading-tight uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 2 cards (Small-Big, Centered) */}
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {coachingTestimonials.slice(3, 5).map((t, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 0 ? 'md:flex-[5]' : 'md:flex-[7]'} bg-[#F1F1EE] p-5 md:p-7 flex flex-col rounded-[12px] shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex-grow">
                    <p className="text-[15px] md:text-[16px] font-normal text-black/80 leading-[1.6] mb-5 text-center font-serif">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-[90px] h-[90px] rounded-full object-cover shadow-lg" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#68B7D4] text-[16px] md:text-[17px] font-bold tracking-tight mb-0.5">{t.name}</h3>
                      <p className="text-[11px] md:text-[12px] font-medium text-black/70 leading-tight uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section: Mentoring */}
      <section className="bg-white py-10">
        <div className="container mx-auto">
          <VideoCarousel items={coachingVideos} onVideoClick={setSelectedVideo} />
        </div>
      </section>

      {/* BREATHWORK Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-[24px] md:text-[30px] font-bold uppercase text-black mb-8 md:mb-12 tracking-widest text-center">BREATHWORK</h2>

          <div className="space-y-6">
            {/* First Row: Adjusted Small-Big-Small (3-4-3 ratio) */}
            <div className="flex flex-col md:flex-row gap-6">
              {breathworkTestimonials.slice(0, 3).map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 1 ? 'md:flex-[4]' : 'md:flex-[3]'} bg-[#F1F1EE] p-5 md:p-7 flex flex-col rounded-[12px] shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex-grow">
                    <p className="text-[14px] md:text-[15px] font-normal text-black/80 leading-[1.5] mb-4 text-center font-serif">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full object-cover shadow-lg" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#68B7D4] text-[15px] md:text-[16px] font-bold tracking-tight mb-0.5">{t.name}</h3>
                      <p className="text-[10px] md:text-[11px] font-medium text-black/70 leading-tight uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row: Big-Small-Medium */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {breathworkTestimonials.slice(3, 6).map((t, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 0 ? 'md:col-span-5' :
                    index === 1 ? 'md:col-span-3' :
                      'md:col-span-4'
                    } bg-[#F1F1EE] p-5 md:p-7 flex flex-col rounded-[12px] shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex-grow">
                    <p className="text-[14px] md:text-[15px] font-normal text-black/80 leading-[1.5] mb-4 text-center font-serif">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full object-cover shadow-lg" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#68B7D4] text-[15px] md:text-[16px] font-bold tracking-tight mb-0.5">{t.name}</h3>
                      <p className="text-[10px] md:text-[11px] font-medium text-black/70 leading-tight uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Third Row: Mirrored 3-4-3 ratio */}
            <div className="flex flex-col md:flex-row gap-6">
              {breathworkTestimonials.slice(6, 9).map((t, index) => (
                <motion.div
                  key={index + 6}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 1 ? 'md:flex-[4]' : 'md:flex-[3]'} bg-[#F1F1EE] p-5 md:p-7 flex flex-col rounded-[12px] shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex-grow">
                    <p className="text-[14px] md:text-[15px] font-normal text-black/80 leading-[1.5] mb-4 text-center font-serif">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full object-cover shadow-lg" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#68B7D4] text-[15px] md:text-[16px] font-bold tracking-tight mb-0.5">{t.name}</h3>
                      <p className="text-[10px] md:text-[11px] font-medium text-black/70 leading-tight uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fourth Row: Adjusted Small-Small-Big (3-3-5 flex ratio) */}
            <div className="flex flex-col md:flex-row gap-6">
              {breathworkTestimonials.slice(9, 12).map((t, index) => (
                <motion.div
                  key={index + 9}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 2 ? 'md:flex-[5]' : 'md:flex-[3]'
                    } bg-[#F1F1EE] p-5 md:p-7 flex flex-col rounded-[12px] shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex-grow">
                    <p className="text-[14px] md:text-[15px] font-normal text-black/80 leading-[1.5] mb-4 text-center font-serif">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full object-cover shadow-lg" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#68B7D4] text-[15px] md:text-[16px] font-bold tracking-tight mb-0.5">{t.name}</h3>
                      <p className="text-[10px] md:text-[11px] font-medium text-black/70 leading-tight uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fifth Row: Micro-Adjusted (5-4.5-2.5 flex ratio) */}
            <div className="flex flex-col md:flex-row gap-6">
              {breathworkTestimonials.slice(12, 15).map((t, index) => (
                <motion.div
                  key={index + 12}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${index === 0 ? 'md:flex-[5]' :
                    index === 1 ? 'md:flex-[4.5]' :
                      'md:flex-[2.5]'
                    } bg-[#F1F1EE] p-5 md:p-7 flex flex-col rounded-[12px] shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="flex-grow">
                    <p className="text-[14px] md:text-[15px] font-normal text-black/80 leading-[1.5] mb-4 text-center font-serif">"{t.text}"</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <div className="flex-shrink-0">
                      <img src={t.image} alt={t.name} className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full object-cover shadow-lg" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-[#68B7D4] text-[15px] md:text-[16px] font-bold tracking-tight mb-0.5">{t.name}</h3>
                      <p className="text-[10px] md:text-[11px] font-medium text-black/70 leading-tight uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section: Breathwork */}
      <section className="bg-white py-10">
        <div className="container mx-auto">
          <VideoCarousel items={breathworkVideos} onVideoClick={setSelectedVideo} />
        </div>
      </section>

      {/* EVENTS Section */}
      <section className="py-12 md:py-20 bg-white text-center">
        <h2 className="text-[24px] md:text-[30px] font-bold uppercase text-black mb-8 md:mb-12 tracking-widest text-center">LIVE</h2>
        <div className="container mx-auto">
          <VideoCarousel items={eventVideos} onVideoClick={setSelectedVideo} />
        </div>
      </section>

      {/* Video Modal (Lightbox) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[2000] bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
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
    </main>
  );
}
