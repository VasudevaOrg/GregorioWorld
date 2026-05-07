'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutGregorioModal = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: (
        <>
          With excitement to grow he <strong>lived on the edge</strong>, and sometimes jumped off of it! Some experiences where he pushed his limits, are <strong>45 days of fasting</strong>, <strong>11 days</strong> in a <strong>pitch-black dark room</strong>, alone, and running a <strong>marathon</strong> with <strong>0 training</strong> (and brand new shoes) which have allowed him to gather a <strong>wide knowledge of practices</strong> for furthering his <strong>evolution</strong>.
        </>
      )
    },
    {
      text: (
        <>
          He learned from several <strong>1-on-1 conversations</strong> with some of the <strong>best teachers</strong> in the world, such as <strong>Don Miguel Ruiz</strong>, <strong>Richard Branson</strong>, <strong>Neale Donald Walsch</strong>, <strong>Wim Hof</strong>, <strong>shamans</strong>, top <strong>Founders</strong> and <strong>CEOs</strong>, <strong>tribe elders</strong>, sports <strong>champions</strong>, community <strong>founders/directors</strong>, and countless more. Inspired by what was possible to transform his life, he <strong>spent time</strong> in the <strong>Amazon Forest</strong>, in the <strong>Himalayas</strong>, in <strong>many deserts</strong> and other spiritual places. He also attended many full-immersion programs such as <strong>Vipassana</strong>, the <strong>Hoffman Process</strong>, <strong>Landmark Advanced</strong>, <strong>Avalon</strong>, <strong>Marina Abramovic's</strong> 4-days immersion, <strong>Feeling Clarity</strong>, and <strong>Light Leadership Retreat</strong>.
        </>
      )
    },
    {
      text: (
        <>
          He continues his journey of self-discovery because he believes in going <strong>beyond limits</strong> and in <strong>following our hearts</strong> and <strong>highest excitement</strong> to live a <strong>joyful and fulfilling life</strong>. For the last <strong>13 years</strong>, he has been <strong>traveling the world</strong>, on a <strong>full-time expedition</strong> to get a <strong>deeper understanding of himself</strong>, other <strong>people</strong>, <strong>communities</strong>, the <strong>planet</strong>, and <strong>life</strong> in general. In 2014, he had one of the <strong>most profound experiences of his life</strong>, when he <strong>discovered the power of the breath</strong>. Since that day, he became highly passionate about <strong>sharing breathwork practices</strong> with others to further <strong>support people</strong> in <strong>changing their lives</strong>. He <strong>learned different breathing modalities</strong> from many teachers and then <strong>created the Breath of One</strong>, a transcendental breathing practice that some <strong>people have defined</strong> as the <strong>most powerful moment of their lives</strong>.
        </>
      )
    },
    {
      text: (
        <>
          Today, <strong>thousands of people</strong>, all over the world, have <strong>experienced</strong> this powerful <strong>practice of unity</strong> and <strong>transformation through the breath</strong>. Some of these people are <strong>Don Jose Ruiz</strong> (co-author of 'The Fifth Agreement'), <strong>Mike Krieger</strong> (co-founder of Instagram), <strong>Naval Ravikant</strong> (VC and founder of AngelList), <strong>Michael Beckwith</strong> (founder of Agape Spiritual Center), <strong>Vishen Lakhiani</strong> (founder of Mindvalley, best-selling author), <strong>Maya Rogers</strong> (CEO of Tetris), <strong>Tom Chi</strong> (former head of innovation at Google), <strong>Mario Almondo</strong> (CEO of Brembo, former CEO of Ferrari), <strong>David 'Avocado' Wolfe</strong> (best-selling author of 'The Beauty Diet'), <strong>Emily Fletcher</strong> (founder of Ziva Meditation), <strong>Marissa Peer</strong> (world-renowned hypnotherapist), <strong>David Block</strong> (musician, The Human Experience and Gone Gone Beyond), <strong>Danette May</strong> (fitness celebrity), and many more.
        </>
      )
    },
    {
      text: (
        <>
          He continues to evolve through learning with <strong>firsthand experiences</strong> and is passionate about sharing his findings to support others in following their hearts and championing their lives. As a <strong>spiritual activator</strong>, he spreads his practices and messages with <strong>thousands of people</strong>, <strong>guiding and/or coaching</strong> game-changers like <strong>Evan Williams</strong> (co-founder of Twitter), <strong>Naval Ravikant</strong> (VC and founder of AngelList) <strong>Reggie Williams</strong> (former NBA player), <strong>Jeffrey Perlman</strong> (CSO of MindValley, former CFO of Zumba, now ), <strong>Christopher deCharms</strong> (Ph.D., neuroscientist, TED speaker), <strong>Mark Lawrence</strong>, (founder and CEO of SpotHero) and many more. He is deeply grateful to do this powerful work along with <strong>his beloved wife Andrea</strong>. They <strong>combine their unique gifts</strong> to help people in <strong>igniting their inner wisdom</strong>.
        </>
      )
    },
    {
      text: (
        <>
          However, for Gregorio, <strong>things were not</strong> always as <strong>bright</strong> and <strong>beautiful</strong> as they are now. <strong>Before</strong> aligning to his passions and purpose, <strong>he lived</strong> an <strong>ego-driven, emotionally volatile, reckless, and materialistic life</strong>. He was a very <strong>troubled adolescent</strong> with countless <strong>extreme life experiences</strong> which <strong>peaked</strong> at the age of <strong>17</strong>, as a rage against the <strong>most tragic moment of his life</strong>.
        </>
      )
    },
    {
      text: (
        <>
          That day of 2003, his mom Anna, <strong>woke him up screaming</strong> at the top of her lungs. As he ran to the living room he saw the <strong>most horrific scene</strong> he could have ever imagined. <strong>Fabio</strong>, his <strong>beloved stepfather</strong>, who he met at 4 and <strong>called ‘dad’</strong>, was having a <strong>massive heart attack</strong>. His <strong>body</strong> was violently <strong>convulsing</strong> with <strong>seizures</strong>, his eyes were <strong>rolled</strong> to the <strong>back</strong> of his head, and he was <strong>heavily foaming</strong> from his mouth.
        </>
      )
    },
    {
      text: (
        <>
          The <strong>sound</strong> of Fabio fighting for his life was an <strong>excruciatingly high-pitched</strong> noise that resembled a machine on the <strong>verge of exploding</strong>. Gregorio, following his mom’s direction, immediately called the <strong>ambulance</strong> and then tried to give Fabio <strong>CPR</strong>. Anna, as a doctor, knew that many people experiencing a heart attack die by <strong>choking</strong> themselves with their <strong>tongues</strong>. So in the meantime, she tried everything she could to <strong>open Fabio’s mouth</strong>, hoping to be able to reach his tongue and help him <strong>to breathe</strong>. However, Fabio’s involuntary <strong>bite perforated her fingers</strong>. Gregorio saw his mom <strong>crying</strong> and <strong>screaming</strong> even louder with her <strong>hand</strong> with <strong>blood</strong>. The ambulance arrived and tried to <strong>resuscitate</strong> Fabio by giving him <strong>electroshock</strong> but there was nothing they could do. <strong>His beloved Fabio</strong>, at the age of 50, was <strong>pronounced dead</strong>. This was the <strong>most horrific, painful, and traumatic</strong> scene he had ever witnessed.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Gregorio cried</strong> endlessly for about <strong>3 weeks</strong> until he <strong>couldn’t cry anymore</strong>, and <strong>after</strong> that, only <strong>cried twice</strong> in the following <strong>10 years</strong>. He suffered from <strong>PTSD</strong>, which <strong>erased all memories of Fabio</strong> to cope with the pain. The trauma was so deep, that he <strong>couldn’t</strong> even process <strong>hearing Fabio’s name</strong> being mentioned because it would cause him to get <strong>vivid flashbacks</strong> of that horrific moment. For this reason, he <strong>withheld</strong> his intense <strong>sadness and grief</strong> from <strong>everyone</strong> (including his closest friends), never sharing anything about his experience <strong>for many years</strong>.
        </>
      )
    },
    {
      text: (
        <>
          His trauma and deep <strong>sadness turned into raging anger</strong> with the <strong>conviction</strong> that there was <strong>no meaning to life</strong>. He developed a belief that <strong>life was not fair</strong>, and became <strong>hyper-destructive</strong>. His behavior from that day was driven by his <strong>confusion</strong> on how <strong>death</strong> could happen <strong>so early</strong>, to one of the most <strong>loving</strong>, kind, and generous <strong>people in the world</strong> that always set a <strong>positive example</strong> for those around him. He <strong>didn’t understand</strong> why a man who embodied <strong>love</strong>, lived a <strong>balanced</strong> and <strong>healthy lifestyle</strong>, (didn’t smoke or drink, ate well, exercised regularly), and <strong>never had any heart conditions</strong>, died in such a <strong>horrific way</strong>, leaving <strong>him</strong> and <strong>his mom destroyed</strong>. Gregorio felt that it <strong>wasn’t fair</strong> for him and his mom to <strong>witness</strong> such a <strong>tragic moment</strong> and that Fabio didn’t deserve to die in that way. He started thinking that if God existed, he <strong>had to be evil</strong>. He felt <strong>no reason to follow the rules</strong>, and choose to live a life that <strong>pushed all limits to the maximum</strong>.
        </>
      )
    },
    {
      text: (
        <>
          His reaction was, for many years, an <strong>uncontrollable</strong> need to <strong>escape from reality</strong>. Constantly in <strong>fight or flight mode</strong>, he started excessively abusing <strong>alcohol and drugs, blacking out</strong> nearly <strong>every weekend, driving recklessly</strong> (crashing many times), <strong>physically fighting</strong> with people, and having <strong>no respect for authority</strong> and for anyone who was not his friend. If you were not his friend, <strong>you were his enemy</strong>. These behaviors brought him to go <strong>in and out</strong> of countless <strong>hospitals, tribunals</strong>, and <strong>police stations</strong>, and <strong>walked the line of death</strong> about <strong>10 times</strong>. In some of these crazy experiences, <strong>doctors</strong> and others <strong>defined</strong> his <strong>survival</strong> as a <strong>miracle</strong>. During those years, <strong>he hit rock bottom</strong> and had <strong>no hope for his future or life</strong>. This was his way of living for the following <strong>4 years</strong>. Then, in 2008 <strong>a miracle</strong> drastically <strong>changed</strong> his perspective of <strong>life</strong>.
        </>
      )
    },
    {
      text: (
        <>
          It was at that moment that he <strong>began</strong> walking <strong>a new path</strong>, remembering that our <strong>life is a masterpiece</strong> and that we are the <strong>creators</strong> of whatever we <strong>choose to live</strong>, consciously or subconsciously. For the full story watch the video below.
          <br /><br />
          <a
            href="https://www.youtube.com/watch?v=qmQkxl8kPmU&t=335s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7dc6db] font-bold hover:underline break-all"
          >
            https://www.youtube.com/watch?v=qmQkxl8kPmU&t=335s
          </a>
        </>
      )
    },
    {
      text: (
        <>
          Thanks to his growth, <strong>Gregorio</strong> no longer <strong>sees Fabio’s death</strong> as the most horrific curse he has ever received, but <strong>as a unique gift</strong> that allowed him to go through the depth of <strong>pain and rage, making him who became today</strong>. Through his <strong>first-hand experiences</strong>, he has <strong>learned</strong> many <strong>life lessons</strong> and is <strong>passionate</strong> about <strong>sharing</strong> these <strong>messages</strong>. Inspired to support others, he teaches <strong>breathwork</strong> and <strong>meditation, speaks on stages</strong>, shares <strong>transformative practices</strong>, and <strong>coaches people</strong> on how they can <strong>envision, design</strong>, and <strong>transform</strong> to <strong>live their wildest dreams</strong>, even if they are <strong>currently living in darkness</strong>. He hopes to <strong>empower</strong> as many people as possible to <strong>ignite</strong> their <strong>personal evolution</strong> for a <strong>beautiful collective future together!</strong>
        </>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[40px] w-full max-w-4xl min-h-[400px] shadow-2xl flex items-center overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 z-10 text-black/20 hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Slider Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-6 z-10 p-2 text-[#7dc6db] hover:scale-125 transition-transform"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 z-10 p-2 text-[#7dc6db] hover:scale-125 transition-transform"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <div className="w-full px-16 md:px-24 py-16 md:py-20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed text-[#333] font-light">
                    {slides[currentSlide].text}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-8 bg-[#7dc6db]' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FoundersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="founders" className="bg-[#E8E7E5] overflow-hidden">
      {/* About Modal */}
      <AboutGregorioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Mobile Header - Visible only on small screens */}
      <div className="lg:hidden px-8 pt-12 text-center sm:text-left">
        <h2 className="text-[18px] font-bold tracking-[3px] uppercase mb-4 text-[#1a1a1a]">MEET</h2>
        <h3 className="text-[32px] font-bold tracking-[1px] uppercase text-[#1a1a1a] leading-tight mb-8">GREGORIO AVANZINI</h3>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Full Bleed Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[800px]">
          <img
            src="/images/founder.jpg"
            alt="Founders"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
            }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center py-12 lg:py-20 px-8 md:px-16 lg:px-24">
          <div className="max-w-xl">
            {/* Desktop Header - Hidden on mobile */}
            <div className="hidden lg:block">
              <h2 className="text-[18px] font-bold tracking-[3px] uppercase mb-8 text-[#1a1a1a]">MEET</h2>
              <h3 className="text-[36px] md:text-[42px] font-bold tracking-[1px] uppercase text-[#1a1a1a] leading-tight mb-8">GREGORIO AVANZINI</h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <p className="text-[15px] md:text-[17px] leading-relaxed text-[#333]">
                Gregorio is a <strong>Fulbright Scholar</strong>, a <strong>spiritual activator</strong>, a <strong>transformational coach</strong>, and the <strong>founder</strong> of the <strong>Breath of One</strong>. He explored <strong>70 countries</strong>, and attended over <strong>80 retreats</strong>, <strong>often teaching, always learning</strong>. He <strong>spoke on stages</strong> all around the world, bringing the <strong>Breath of One</strong> to over <strong>8,500 people</strong>. After receiving his <strong>Masters of Architecture</strong> from the <strong>University of Michigan</strong>, where he also assisted in <strong>teaching</strong>, he paused his academic career to <strong>follow his heart</strong> and <strong>embrace a new life</strong>. Trusting his intuition, he took a <strong>leap of faith</strong> and created the <strong>life of his wildest dreams</strong>.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block text-[12px] font-bold tracking-[2.5px] uppercase border-b-[2px] border-black pb-1 hover:text-gray-600 transition-all"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;


