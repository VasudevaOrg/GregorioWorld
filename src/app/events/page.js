'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import VideoCarousel from '@/components/VideoCarousel';

export default function EventsPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [openWorkshops, setOpenWorkshops] = useState(-1);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[100vh] flex items-start justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/corousals/LIVE-EXPERIENCES-HEADER-PHOTO.jpg"
            alt="Live Experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center px-4 pt-[100px] md:pt-[140px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-normal uppercase tracking-[-0.02em] leading-[1]"
          >
            LIVE EXPERIENCES
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-[16px] md:text-[20px] font-bold text-black uppercase tracking-[2px] mb-1">
            curated Immersions
          </h2>
          <p className="text-[13px] md:text-[15px] text-black/80 max-w-xl mx-auto mb-8">
            to ignite personal and collective transformation for retreats, conferences, events, corporate, and team building.
          </p>

          <div className="relative max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden shadow-xl">
            <video
              src="videos/remember.mp4"
              controls
              playsInline
              className="w-full h-auto"
            />
          </div>

          <div className="text-[15px] md:text-[18px] text-black/90 leading-snug font-light max-w-5xl mx-auto">
            <p>Our experiences will support you to <strong>remember your roots</strong> and to <strong>re-connect</strong> with others <strong>like you never had before</strong>.</p>
            <p>It is time to embrace our</p>
            <p><strong>true essence.</strong></p>
          </div>
        </div>
      </section>

      {/* Section 3: BREATHWORK Expandable */}
      <section className="py-12 md:py-24 bg-[#FBF9F7]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            {/* Left Image - Dominant and Sticky */}
            <div className="hidden md:block w-full md:w-[60%] sticky top-32">
              <div className="rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <img
                  src="images/corousals/LIVE-BREATHWORK-EXPERIENCES_edit.jpg"
                  alt="Live Breathwork Experiences"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[40%] pt-4">
              <h2 className="text-[32px] md:text-[44px] font-bold text-black uppercase tracking-[3px] mb-12">
                Breathwork
              </h2>

              {/* Mobile Image */}
              <div className="md:hidden mb-10 rounded-[20px] overflow-hidden shadow-xl">
                <img
                  src="images/corousals/LIVE-BREATHWORK-EXPERIENCES_edit.jpg"
                  alt="Live Breathwork Experiences"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-1">
                {[
                  {
                    id: 'breath-of-one',
                    title: "BREATH OF ONE |",
                    subtitle: "Breathe, Release, Transcend",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“Breath is the bridge which connects life to consciousness, which unites your body to your thoughts.”</span>
                          <strong className="text-[13px] uppercase tracking-wider mt-2 block">— Thich Nhat Hanh</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          Among the <strong>6,500+ people</strong> who have <strong>experienced</strong> the <strong>Breath of One</strong>, most have described it as <strong><span className="text-[#68B7D4] font-medium">deeply transformational</span></strong>, many as <strong><span className="text-[#68B7D4] font-medium">life-changing</span></strong>, and some others as the <strong><span className="text-[#68B7D4] font-medium">most powerful moment of their lives</span></strong>.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          It is a transformative <strong>3-hour breathwork experience</strong> where, through the power of your breath, <strong>you can truly change your life, in only one session!</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          The Breath of One can show you <strong>something totally new</strong> that the rational mind has <strong>never imagined</strong>. This journey allows you to <strong><span className="text-[#68B7D4] font-medium">quiet your mind, open your heart and connect to your true self and the people around you</span></strong>. It can also spark <strong>subconscious reprogramming</strong> by <strong>releasing blockages, healing deep traumas</strong>, and <strong>finding clarity to live</strong> a life of <strong>purpose, freedom</strong>, and <strong>joy</strong>.
                        </p>
                        <p className="text-[13px] md:text-[14px] text-black/60 italic border-t border-black/5 pt-4">
                          This practice is for everyone, <strong>from beginners to advanced</strong>. Practitioners like Naval Ravikant, Mike Krieger, Vishen Lakhiani, and Tom Chi have experienced sessions with us.
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'breathe-freedom',
                    title: "BREATHE YOUR FREEDOM |",
                    subtitle: "The Fun Meditation Approach",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“Laugh as much as you breathe and love as long as you live.”</span>
                          <strong className="text-[13px] uppercase tracking-wider mt-2 block">— Author Unknown</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>A live version of the online program</strong> that <strong><span className="text-[#68B7D4] font-medium">integrates playfulness into breathwork</span></strong>. Interactive exercises lead the group into a <strong>surprising journey guided by fun</strong>, ranging from <strong>20 minutes to 2 hours</strong>.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          While the <strong>Breath Of One is a marathon, <span className="text-[#68B7D4] font-medium">Breathe Your Freedom is the training</span></strong> that <strong>primes your soul</strong> to go even further <strong>into self-discovery</strong>.
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'breathe-superpowers',
                    title: "BREATHE SUPERPOWERSS |",
                    subtitle: "Breathe, Move, Elevate",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“Breathing control gives man strength, vitality, inspiration, and magic powers.”</span>
                          <strong className="text-[13px] uppercase tracking-wider mt-2 block">— Zhuangzi</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          A <strong>spiritual workout</strong> that combines different <strong><span className="text-[#68B7D4] font-medium">fitness modalities</span></strong> and <strong><span className="text-[#68B7D4] font-medium">breathwork techniques</span></strong> to <strong>strengthen the body</strong> while <strong>elevating the soul.</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          <strong><span className="text-[#68B7D4] font-medium">Revitalize</span></strong> balance, <strong><span className="text-[#68B7D4] font-medium">reinvigorate</span></strong> your entire being, and <strong><span className="text-[#68B7D4] font-medium">feel empowered</span></strong> to form <strong>the best version of yourself.</strong>
                        </p>
                      </div>
                    )
                  }
                ].map((item) => (
                  <div key={item.id} className="border-none">
                    <button
                      onClick={() => setOpenFaq(openFaq === item.id ? -1 : item.id)}
                      className="flex items-start gap-4 w-full text-left py-3 group"
                    >
                      <span className="mt-1 flex-shrink-0 text-black">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          style={{ transform: openFaq === item.id ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[15px] md:text-[19px] font-bold text-black tracking-[1px] uppercase leading-tight">
                          {item.title}
                        </span>
                        <span className="text-[13px] md:text-[15px] font-light text-black/60 italic mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pt-2">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 5: Testimonials Carousel */}
      <section className="py-12 md:py-16 bg-white border-t border-black/5">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <h2 className="text-center text-[18px] font-bold tracking-[2px] uppercase mb-12 text-[#1a1a1a]">TESTIMONIALS</h2>

          <div className="relative flex items-center group px-6 md:px-16">
            <button
              onClick={() => {
                const container = document.getElementById('event-testimonials-scroll');
                if (container && container.children.length > 1) {
                  const item1 = container.children[0];
                  const item2 = container.children[1];
                  const scrollDistance = item2.offsetLeft - item1.offsetLeft;
                  container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
                }
              }}
              className="absolute left-0 text-[#7dc6db] hover:scale-125 transition-transform z-10 p-2"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div
              id="event-testimonials-scroll"
              className="flex overflow-x-auto scrollbar-hide w-full gap-16 md:gap-20 scroll-smooth snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                {
                  name: 'Nadav Wilf',
                  role: 'Founder and CEO - Head Alignment Coach | former Chief Possibilities Officer - HeroX',
                  highlight: '‘I don’t say this lightly, breathwork with Gregorio changed my life forever.',
                  quote: 'I saw that there’s more than just our bodies and that I could go there anytime through meditation. Gregorio is a pure-hearted masterful facilitator that will take you to new heights.’',
                  image: 'images/corousals/nadav-wilf-testimonial-op.jpg'
                },
                {
                  name: 'Arancha Muelas',
                  role: 'Director, Brand & Content Strategy - MadBlue Summit | Former Director Global Brand Strategy at Vistaprint',
                  highlight: '‘I witnessed the transformation of a group, leading to a sense of connection as never experienced.',
                  quote: 'Andrea and Gregorio make magic, balancing masculine and feminine energies for co-creation and transformation!’',
                  image: 'images/corousals/Copy-of-arancha-op.jpg'
                },
                {
                  name: 'Andrea Aicardi',
                  role: 'VP of Growth - Neosensory Inc. | MIT Graduate',
                  highlight: '‘A transformational experience that will unlock your hidden energy.',
                  quote: 'Unlike many ‘holistic’ practices, it’s rooted in science. A mind-bending journey, inspiring even the most skeptical.’',
                  image: 'images/corousals/andrea-aicardi-testimonial-op.jpg'
                },
                {
                  name: 'Helena Wasserman Erikson',
                  role: 'Impact Investor | TEDx Speaker | Forbes 30 under 30',
                  highlight: '‘I had one of the craziest experiences of my life.',
                  quote: 'I experienced the oneness I had just read about and felt deeply connected with everyone in the world.’',
                  image: 'images/corousals/Copy-of-helena-op.jpg'
                },
                {
                  name: 'Mario Almondo',
                  role: 'General Manager of Performance Division - Brembo S.p.A | former SVP - Ferrari S.p.A',
                  highlight: '‘You\'ll be part of an energetic experience, delivering an unsuspected intimate and refreshing stream of emotion.',
                  quote: 'Reach a new level of energy, driven by professionals like Gregorio and Andrea. Good food for soul.’',
                  image: 'images/corousals/mario-almondo-testimonial.jpg'
                },
                {
                  name: 'David Block',
                  role: 'Composer/Producer - The Human Experience',
                  highlight: '‘An experience of union, liberation, power, and surrender.',
                  quote: 'Gregorio will guide you on one of the most magical journeys of your life.’',
                  image: 'images/corousals/david-block-testimonial-op.jpg'
                }
              ].map((t, index) => (
                <div
                  key={index}
                  className="testimonial-item flex-shrink-0 w-full lg:w-[calc(50%-40px)] flex flex-row items-start gap-8 text-left snap-start"
                >
                  <div className="flex-shrink-0">
                    <img src={t.image} alt={t.name} className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-sm" />
                  </div>
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
              onClick={() => {
                const container = document.getElementById('event-testimonials-scroll');
                if (container && container.children.length > 1) {
                  const item1 = container.children[0];
                  const item2 = container.children[1];
                  const scrollDistance = item2.offsetLeft - item1.offsetLeft;
                  container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 text-[#7dc6db] hover:scale-125 transition-transform z-10 p-2"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-block border-[1px] border-black/20 hover:border-black px-10 py-4 rounded-full text-[14px] font-bold uppercase tracking-[2px] transition-all"
            >
              All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Workshops and Retreats (Reversed) */}
      <section className="py-12 md:py-24 bg-[#FBF9F7]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-24 items-start">
            {/* Right Image - Dominant and Sticky */}
            <div className="hidden md:block w-full md:w-[60%] sticky top-32">
              <div className="rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <img
                  src="images/corousals/IMG_0776.jpg"
                  alt="Workshops and Retreats"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="w-full md:w-[40%] pt-4">
              <h2 className="text-[32px] md:text-[38px] font-bold text-black uppercase tracking-[3px] mb-12">
                Workshops and Retreats
              </h2>

              {/* Mobile Image */}
              <div className="md:hidden mb-10 rounded-[20px] overflow-hidden shadow-xl">
                <img
                  src="images/corousals/IMG_0776.jpg"
                  alt="Workshops and Retreats"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="space-y-1">
                {[
                  {
                    id: 'dining-experience',
                    title: "MULTI-SENSORIAL DINING EXPERIENCE",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“When practiced to its fullest, mindful eating turns a simple meal into a spiritual experience, giving us a deep appreciation of all that went into the meal’s creation as well a deep understanding of the relationship between the food on our table, our own health, and our planet’s health.”</span>
                          <strong className="text-[13px] uppercase tracking-wider mt-2 block">— Thích Nhất Hạnh</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          Embark on an <strong>immersive journey <span className="text-[#68B7D4] font-medium">through food</span></strong> that <strong>nourishes</strong> the body, stimulates the senses, and <strong>revives</strong> the soul. The blend of <strong><span className="text-[#68B7D4] font-medium">games and moments of mindfulness</span></strong> connect you to the beauty of nature, ignited by a creative <strong>plant-based menu.</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>Laugh</strong>, and <strong>have fun</strong> while <strong><span className="text-[#68B7D4] font-medium">learning new practices</span></strong> to start honoring and understanding the relationship between food and your body.
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'art-reconnecting',
                    title: "THE ART OF RECONNECTING",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“You have to make a space in your heart, in your mind and in your life itself for authentic human connection.”</span>
                          <strong className="text-[13px] uppercase tracking-wider mt-2 block">— Marianne Williamson</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          An <strong>effective workshop</strong> to <strong><span className="text-[#68B7D4] font-medium">open your heart</span></strong> and <strong><span className="text-[#68B7D4] font-medium">awaken</span></strong> the nature of <strong>pure human connection</strong>.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>Well-established</strong> and <strong>unconventional</strong> practices/techniques guide the group to organically <strong><span className="text-[#68B7D4] font-medium">reconnect with other people</span></strong>, our <strong><span className="text-[#68B7D4] font-medium">emotions</span></strong>, and our <strong><span className="text-[#68B7D4] font-medium">true self</span></strong>.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          <strong>Learn the tools</strong> and <strong>feel inspired</strong> to create more <strong><span className="text-[#68B7D4] font-medium">meaningful relationships</span></strong> in your <strong>everyday life</strong>.
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'joy-kid',
                    title: "THE JOY OF BEING A KID AGAIN",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“We don’t stop playing because we grow old; we grow old because we stop playing.”</span>
                          <strong className="text-[13px] uppercase tracking-wider mt-2 block">— George Bernard Shaw</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          A light-hearted experience full of <strong>games, surprises, teams</strong>, and <strong>prizes</strong>, to <strong><span className="text-[#68B7D4] font-medium">awaken the child</span></strong> within us.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          Ideal for <strong>team building</strong> and supporting people in <strong><span className="text-[#68B7D4] font-medium">remembering how to take life less seriously</span></strong>. Re-establish your <strong>natural state of pure joy</strong>.
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'sustainable-living',
                    title: "SUSTAINABLE AND CONSCIOUS LIVING",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“We are not defending nature, we are nature defending itself.”</span>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>Our home, planet Earth, <span className="text-[#68B7D4] font-medium">is screaming for help</span></strong> and we are getting <strong>closer to <span className="text-[#68B7D4] font-medium">the point of no return</span>.</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>Every day its voice is getting louder, and <span className="text-[#68B7D4] font-medium">if we don’t listen, our problems will become irreversible</span></strong>, making the future for us and our children something difficult to imagine.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          <strong>Understand <span className="text-[#68B7D4] font-medium">global issues</span>, ignite <span className="text-[#68B7D4] font-medium">your inner-fire</span>, learn</strong> how <strong><span className="text-[#68B7D4] font-medium">to live with integrity</span></strong>, and <strong>in harmony <span className="text-[#68B7D4] font-medium">with the rest of nature</span></strong>.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          This is a <strong>lifestyle workshop</strong> to <strong><span className="text-[#68B7D4] font-medium">inspire a global change</span></strong>, starting with <strong>each choice we make. <span className="text-[#68B7D4] font-medium">Theory and practice</span></strong> are combined to give you the tools to <strong>create</strong> a <strong><span className="text-[#68B7D4] font-medium">mindful and regenerative life</span></strong>.
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'ceremonies',
                    title: "OPENING AND CLOSING CEREMONIES",
                    content: (
                      <div className="space-y-4">
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>Opening</strong> an event properly <strong><span className="text-[#68B7D4] font-medium">is essential in setting the foundation</span></strong> to turn an experience from good <strong>to life-changing</strong>. Holding a powerful intention for both the individual and the group creates <strong><span className="text-[#68B7D4] font-medium">beautiful energy</span></strong> that is <strong>carried throughout the event</strong>.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>Closing</strong> is <strong><span className="text-[#68B7D4] font-medium">equally as important</span>. Reflecting on the learnings</strong> strengthen the sense of community, and <strong><span className="text-[#68B7D4] font-medium">create a ripple effect to inspire others</span></strong> in expanding the event.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          We use many modalities that adapt to the groups and to the goals of the event.
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'talks',
                    title: "INSPIRATIONAL TALKS",
                    content: (
                      <div className="space-y-4">
                        <p className="italic text-center mb-6">
                          <span className="block text-[15px] text-black/80 font-serif">“Speakers who talk about what life has taught them never fail to keep the attention of their listeners.”</span>
                          <strong className="text-[13px] uppercase tracking-wider mt-2 block">— Dale Carnegie</strong>
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          <strong>Life wasn’t always this magical for</strong> Andrea and Gregorio.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed">
                          They have both gone through <strong>an intense rollercoaster <span className="text-[#68B7D4] font-medium">of darkness and light</span></strong> that have <strong>shaped who they are today</strong>. By <strong><span className="text-[#68B7D4] font-medium">suffering</span></strong> from and <strong>overcoming deep traumas</strong>, they <strong>understood</strong> the <strong>tools to <span className="text-[#68B7D4] font-medium">share their learnings with others</span></strong> both in-person and online.
                        </p>
                        <p className="text-[14px] md:text-[16px] text-black/80 leading-relaxed font-light">
                          Together <strong>they combine</strong> their <strong><span className="text-[#68B7D4] font-medium">unique perspectives</span></strong> and insights about <strong>different topics</strong> such as:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-[13px] md:text-[14px] text-black/70 list-disc pl-5">
                          <li>The power of the breath</li>
                          <li>Redemption: From darkness to light</li>
                          <li>Create the love of your dreams</li>
                          <li>Self-love and building confidence</li>
                          <li>Healing relationship with food</li>
                          <li>Joy, playfulness, and adventure</li>
                          <li>Transcend negativity, trust life</li>
                          <li>Discover your purpose</li>
                          <li>Conscious communication</li>
                          <li>Discipline to blissipline</li>
                        </ul>
                      </div>
                    )
                  }
                ].map((item) => (
                  <div key={item.id} className="border-none">
                    <button
                      onClick={() => setOpenWorkshops(openWorkshops === item.id ? -1 : item.id)}
                      className="flex items-start gap-4 w-full text-left py-3 group"
                    >
                      <span className="mt-1 flex-shrink-0 text-black">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          style={{ transform: openWorkshops === item.id ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[15px] md:text-[19px] font-bold text-black tracking-[1px] uppercase leading-tight">
                          {item.title}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {openWorkshops === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pt-2">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Video Testimonials */}
      <VideoCarousel
        title="TESTIMONIALS"
        desktopItems={4}
        items={[
          { id: 'mFiJnsZqwBs', title: 'Reggie Williams', thumb: '/images/reggie-williams.jpg' },
          { id: 'AJf-fylSIdU', title: 'Anthony Trucks', thumb: '/images/anthony-trucks.jpg' },
          { id: "yPfy3B6ihUA", title: "Cynthia", thumb: "/images/corousals/cynthia.jpg" },
          { id: '-Io-4RYDyos', title: 'Rob Palomo', thumb: '/images/rob-palomo.jpg' },
        ]}
      />

    </main>
  );
}
