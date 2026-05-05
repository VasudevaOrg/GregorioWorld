'use client';
import React from 'react';

const FoundersSection = () => {
  return (
    <section className="bg-[#fffbf7] overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Full Bleed Image */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[800px]">
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
        <div className="w-full lg:w-1/2 flex items-center py-20 px-8 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <h2 className="text-[18px] font-bold tracking-[3px] uppercase mb-12 text-[#1a1a1a]">MEET Gregorio</h2>

            <div className="space-y-8">
              <h3 className="text-[36px] md:text-[42px] font-bold tracking-[1px] uppercase text-[#1a1a1a] leading-tight">GREGORIO AVANZINI</h3>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-[#333]">
                Gregorio is a <strong>Fulbright Scholar</strong>, a <strong>spiritual activator</strong>, a <strong>transformational coach</strong>, and the <strong>founder</strong> of the <strong>Breath of One</strong>. He explored <strong>67 countries</strong>, and attended over <strong>50 retreats</strong>, <strong>often teaching, always learning</strong>. He <strong>spoke on stages</strong> all around the world, bringing the <strong>Breath of One</strong> to over <strong>6,500 people</strong>. After receiving his <strong>Masters of Architecture</strong> from the <strong>University of Michigan</strong>, where he also assisted in <strong>teaching</strong>, he paused his academic career to <strong>follow his heart</strong> and <strong>embrace a new life</strong>. Trusting his intuition, he took a <strong>leap of faith</strong> and created the <strong>life of his wildest dreams</strong>.
              </p>

              <div className="pt-4">
                <a href="/about" className="inline-block text-[12px] font-bold tracking-[2.5px] uppercase border-b-[2px] border-black pb-1 hover:text-gray-600 transition-all">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;

