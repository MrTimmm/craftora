import React from 'react';

const CTASection = ({ scrollToSection }) => {
  return (
    <section className="py-28 px-10 bg-[#F0EAD6] text-center relative overflow-hidden before:content-['CRAFTORA'] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:font-['Cinzel'] before:text-[clamp(6rem,18vw,22rem)] before:font-bold before:text-transparent before:[-webkit-text-stroke:1px_rgba(139,26,26,0.05)] before:whitespace-nowrap before:pointer-events-none before:select-none before:tracking-widest" id="contact">
      <div className="relative z-10 max-w-175 mx-auto">
        <div className="text-[0.65rem] tracking-[0.45em] uppercase text-[#8B1A1A] mb-5 reveal">Begin your commission</div>
        <h2 className="font-['Cinzel'] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.2] text-[#6B1212] mb-4 reveal reveal-delay-1">
          Let's make something<br/>
          <em className="font-['Cormorant'] italic font-light text-[#8B1A1A]">truly unforgettable</em>
        </h2>
        <p className="text-[1rem] leading-[1.9] text-[#5a3535] mb-10 font-light reveal reveal-delay-2">
          Whether you have a clear vision or just a feeling — we'd love to hear from you. Every extraordinary piece starts with a simple conversation.
        </p>
        <div className="flex flex-wrap gap-5 justify-center reveal reveal-delay-3">
          <a 
            href="mailto:hello@craftoraatelier.com" 
            className="inline-flex items-center gap-2.5 px-10 py-4 font-['Cinzel'] text-[0.7rem] tracking-[0.25em] uppercase text-[#F0EAD6] bg-[#6B1212] border-none transition-all duration-300 hover:bg-[#9e1f1f] hover:-translate-y-0.5 no-underline"
            style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
          >
            Start a Commission
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a 
            href="#collections" 
            className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase text-[#5a3535] no-underline transition-colors duration-300 border-b border-[rgba(90,53,53,0.3)] pb-0.5 hover:text-[#6B1212] hover:border-[rgba(107,18,18,0.6)]"
            onClick={(e) => { e.preventDefault(); scrollToSection('collections'); }}
          >
            View Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;