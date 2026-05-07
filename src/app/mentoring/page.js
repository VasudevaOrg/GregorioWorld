'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const BookCallModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formData.message,
      to_email: 'Greg.Avanzini@gmail.com',
    };

    try {
      await emailjs.send(
        'service_842n4oh',
        'template_cuh9bji',
        templateParams,
        'Kf5gpohi6v10JDohV'
      );
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

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
            className="relative bg-white rounded-[32px] p-6 md:p-12 max-w-[600px] w-full shadow-2xl border-[1px] border-black/10 max-h-[90vh] overflow-y-auto no-scrollbar z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-black/20 hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <h2 className="text-[24px] md:text-[36px] font-bold text-black uppercase tracking-tight mb-2">Book a Call</h2>
            <p className="text-[14px] md:text-[16px] text-black/60 mb-6 md:mb-8">
              Share your details below and Gregorio will get in touch with you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  required
                  className="bg-[#F9F9F9] border-none rounded-[15px] px-6 py-4 text-[14px] text-black focus:ring-1 focus:ring-[#7dc6db] outline-none transition-all"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="LAST NAME"
                  required
                  className="bg-[#F9F9F9] border-none rounded-[15px] px-6 py-4 text-[14px] text-black focus:ring-1 focus:ring-[#7dc6db] outline-none transition-all"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full bg-[#F9F9F9] border-none rounded-[15px] px-6 py-4 text-[14px] text-black focus:ring-1 focus:ring-[#7dc6db] outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                placeholder="WHAT INSPIRED YOU TO REACH OUT?"
                required
                rows="4"
                className="w-full bg-[#F9F9F9] border-none rounded-[15px] px-6 py-4 text-[14px] text-black focus:ring-1 focus:ring-[#7dc6db] outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-[#7dc6db] hover:bg-opacity-90 text-white font-bold py-4 rounded-full text-[14px] uppercase tracking-[2px] transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'SENDING...' : status === 'success' ? 'SENT SUCCESSFULLY!' : 'SEND REQUEST'}
              </button>
            </form>

            {status === 'error' && (
              <p className="mt-4 text-red-500 text-[13px] font-medium text-center italic">Oops! Something went wrong. Please try again.</p>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import VideoCarousel from '@/components/VideoCarousel';

export default function MentoringPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <main className="bg-white">
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Cinematic Banner Section */}
      <section className="relative h-[85vh] md:h-[100vh] flex items-end overflow-hidden pb-8 md:pb-16">
        {/* Background Image - Matching the provided reference */}
        <div className="absolute inset-0">
          <img
            src="images/mentoringMain.png"
            alt="Mentoring Journey"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80';
            }}
          />
          {/* Light overlay to match the high-key aesthetic of the screenshot */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* Text Content Overlay - Pinned to Bottom Left */}
        <div className="w-full px-6 md:px-12 z-10 relative text-left">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[34px] sm:text-[42px] md:text-[60px] lg:text-[72px] xl:text-[90px] font-normal text-black leading-[0.9] mb-4 md:mb-6 uppercase tracking-[-1px] sm:tracking-[-2px] md:tracking-[-4px]"
            >
              I BRING <br />
              PEOPLE AND <br />
              GROUPS ON <br />
              JOURNEYS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-[16px] sm:text-[18px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-black/80 font-medium max-w-2xl leading-snug md:leading-normal"
            >
              Helping people reconnect to joy, freedom, confidence, Connection, and fuller experience of life.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Section 2: Beyond Success */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
            {/* Left Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-[30px] overflow-hidden shadow-2xl max-w-[450px]">
                <img
                  src="images/slim.jpg"
                  alt="Beyond Success"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3">
              <h2 className="text-[28px] md:text-[36px] font-bold text-black leading-tight mb-8">
                Beyond Success. Into Full Aliveness.
              </h2>
              <div className="space-y-6">
                <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed">
                  Many people and organizations spend years chasing performance while losing connection to what makes life and work truly meaningful: joy, freedom, adventure, spontaneity, and genuine human connection.
                </p>
                <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed">
                  I’ll support you to create exponential growth through life mentorship, transformational experiences, immersive workshops, breathwork, and human-centered development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Testimonials */}
      <TestimonialsCarousel bgColor="bg-[#FBF9F7]" />

      {/* Testimonials CTA */}
      <div className="flex justify-center pb-20 md:pb-32 bg-[#FBF9F7]">
        <a href="/testimonials" className="px-10 py-3 bg-[#7dc6db] text-white border border-[#7dc6db] rounded-full text-[11px] font-bold tracking-[2px] uppercase hover:bg-white hover:text-[#7dc6db] transition-all duration-300">
          ALL TESTIMONIALS
        </a>
      </div>
      {/* Section 3: Areas of Evolution */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-[1440px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Content - Grid of 4 Boxes */}
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-16">

                {/* 1. Confidence & Self-Leadership */}
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-black leading-tight tracking-tight">Confidence & Self-Leadership</h3>
                  <ul className="space-y-2">
                    {[
                      'Self-trust and confidence',
                      'Emotional resilience',
                      'Authentic self-expression',
                      'Leadership presence',
                      'Courage and decision making',
                      'Expanding beyond self-imposed limits'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] md:text-[16px] text-black/70 font-normal leading-snug">
                        <span className="text-[18px] leading-none mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Relationships & Connection */}
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-black leading-tight tracking-tight">Relationships & Connection</h3>
                  <ul className="space-y-2">
                    {[
                      'Communication and emotional intelligence',
                      'Deeper relationships and trust',
                      'Team connection and collaboration',
                      'Openness and authenticity',
                      'Meaningful human connection',
                      'Building stronger communities'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] md:text-[16px] text-black/70 font-normal leading-snug">
                        <span className="text-[18px] leading-none mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Freedom, Adventure & Lifestyle */}
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-black leading-tight tracking-tight">Freedom, Adventure & Lifestyle</h3>
                  <ul className="space-y-2">
                    {[
                      'Reconnecting to joy and playfulness',
                      'Living with more freedom and spontaneity',
                      'Expanding perspective and possibility',
                      'Creating a richer experience of life',
                      'Adventure, presence, and curiosity',
                      'Designing a life aligned with what truly matters'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] md:text-[16px] text-black/70 font-normal leading-snug">
                        <span className="text-[18px] leading-none mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Wellbeing & Performance */}
                <div className="space-y-4">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-black leading-tight tracking-tight">Wellbeing & Performance</h3>
                  <ul className="space-y-2">
                    {[
                      'Nervous system regulation',
                      'Sustainable energy and wellbeing',
                      'Stress management and recovery',
                      'Presence and mindfulness',
                      'High performance without burnout',
                      'Emotional balance and clarity'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] md:text-[16px] text-black/70 font-normal leading-snug">
                        <span className="text-[18px] leading-none mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <div className="rounded-[40px] overflow-hidden shadow-2xl w-full max-w-[450px] aspect-[4/5] lg:aspect-auto lg:h-full">
                <img
                  src="images/sitting.jpg"
                  alt="Gregorio Mentoring"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
              </div>
            </div>

          </div>

          {/* Book a Call Button */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block border-[1px] border-black/20 hover:border-[#7dc6db] px-12 py-4 rounded-full text-[12px] font-bold uppercase tracking-[3px] transition-all duration-300 hover:text-[#7dc6db] bg-white cursor-pointer"
            >
              BOOK A CALL
            </button>
          </div>
        </div>
      </section>



      {/* Section 4: Remember Gathering (Final Section) */}
      <section className="pt-0 pb-12 md:pb-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            {/* Left Video */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative rounded-[30px] overflow-hidden shadow-2xl max-w-[650px]">
                <video
                  src="videos/gather.mp4"
                  controls
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed">
                  A glimpse into Remember Gathering, an example of the immersive experiences created to support both personal and collective growth through connection, challenges, reflection, playfulness, and team building.
                </p>
                <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed">
                  Every experience is different, but the intention remains the same: creating spaces that help people reconnect, expand, and experience life more fully. No two experiences are the same. This is simply one expression of what's possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Video Testimonials */}
      <div className="pt-8 pb-12 md:pb-24">
      <VideoCarousel 
        desktopItems={4}
        items={[
          { id: 'mFiJnsZqwBs', title: 'Reggie Williams', thumb: '/images/reggie-williams.jpg' },
          { id: 'AJf-fylSIdU', title: 'Anthony Trucks', thumb: '/images/anthony-trucks.jpg' },
          { id: "yPfy3B6ihUA", title: "Cynthia", thumb: "https://i0.wp.com/gregorio.world/wp-content/uploads/2021/12/cynthia.jpg?fit=533%2C300&ssl=1" },
          { id: '-Io-4RYDyos', title: 'Rob Palomo', thumb: '/images/rob-palomo.jpg' }
        ]} 
      />
      </div>
    </main>
  );
}
