'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS Configuration
    const serviceId = 'service_rjqjrum'; // Replace with your Service ID
    const templateId = 'template_kyub5pr'; // Replace with your Template ID
    const publicKey = 'X3FyHm9uEcvWl609O'; // Replace with your Public Key

    const templateParams = {
      from_email: email,
      from_name: `${firstName} ${lastName}`,
      first_name: firstName,
      last_name: lastName,
      to_email: 'greg.avanzini@gmail.com',
      message: `New subscription request from: ${firstName} ${lastName} (${email})`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setEmail('');
        setFirstName('');
        setLastName('');
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <footer className="">
      <div className="py-16 bg-[#E8E7E5]">
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Left Section */}
            <div className="flex flex-col gap-8">
              {/* Connect with us */}
              <div>
                <h4 className="font-bold text-[15px] mb-4 text-[#1a1a1a]">Connect with me</h4>
                <div className="flex gap-4 text-[#1a1a1a]">
                  <a href="https://www.instagram.com/gregorio.world/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.facebook.com/gregorio.avanzini/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/gregorio-avanzini-a1686315/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" title="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="4" ry="4"></rect>
                      <path d="M8 11v5"></path>
                      <path d="M8 8v.01"></path>
                      <path d="M12 16v-5"></path>
                      <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Photography Credits */}
              {/* <div className="text-[13px] text-gray-700 leading-relaxed">
                <p>Photography by:</p>
                <p>Julian Tse - Chris Agafi - Houseoftramp</p>
              </div> */}

              {/* Policy Links */}
              <div className="flex flex-col gap-2 pt-2">
                <a href="/privacy" className="font-bold text-[14px] text-[#1a1a1a]">Privacy Policy</a>
                <a href="/terms" className="font-bold text-[14px] text-[#1a1a1a]">Terms & Conditions</a>
                <a href="/cookies" className="font-bold text-[14px] text-[#1a1a1a]">Cookie Policy</a>
              </div>
            </div>

            {/* Right Section - Mailing List */}
            <div className="md:pt-1 max-w-sm w-full mx-auto md:mx-0">
              <p className="text-[13px] md:text-[14px] text-gray-500 font-light tracking-wide uppercase text-center md:text-left">
                Join my mailing list for unique updates
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                  <div className="border-b border-black/20 pb-2 focus-within:border-black transition-colors">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="first name"
                      className="bg-transparent border-none outline-none text-[14px] w-full lowercase italic placeholder:text-gray-300"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className="border-b border-black/20 pb-2 focus-within:border-black transition-colors">
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="last name"
                      className="bg-transparent border-none outline-none text-[14px] w-full lowercase italic placeholder:text-gray-300"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="flex items-center border-b border-black/20 pb-2 focus-within:border-black transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email address"
                    className="bg-transparent border-none outline-none text-[14px] w-full lowercase italic placeholder:text-gray-300"
                    required
                    disabled={status === 'loading'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="ml-2 hover:translate-x-1 transition-transform disabled:opacity-50"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </form>

              {status === 'success' && (
                <p className="mt-2 text-[12px] text-green-600 font-medium animate-pulse">
                  Thank you! You've been subscribed.
                </p>
              )}

              {status === 'error' && (
                <p className="mt-2 text-[12px] text-red-500 font-medium">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>

          {/* Copyright Footer */}
          <div className="mt-20 pt-8 border-t border-black/5 text-center">
            <p className="text-[12px] text-gray-400 lowercase tracking-widest">
              © 2026 Gregorio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
