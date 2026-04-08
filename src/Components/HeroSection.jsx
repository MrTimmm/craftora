import React from 'react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen bg-[#6B1212] flex items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 opacity-8 bg-[radial-gradient(ellipse_120%_80%_at_20%_50%,#F0EAD6_0%,transparent_60%),radial-gradient(ellipse_80%_120%_at_80%_20%,#F0EAD6_0%,transparent_60%)]" aria-hidden="true" />
      
      <div className="absolute right-[-4vw] top-1/2 -translate-y-1/2 font-['Cinzel'] text-[clamp(24rem,35vw,48rem)] font-bold text-transparent [-webkit-text-stroke:1px_rgba(240,234,214,0.06)] leading-none pointer-events-none select-none tracking-[-0.05em]" aria-hidden="true">
        C
      </div>

      {/* Organic SVG lines background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-6" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <path d="M-100 450 C200 200, 400 600, 700 350 C1000 100, 1200 500, 1540 300" stroke="#F0EAD6" strokeWidth="1" fill="none"/>
          <path d="M-100 600 C150 400, 350 700, 720 480 C1000 320, 1300 600, 1540 450" stroke="#F0EAD6" strokeWidth="0.8" fill="none"/>
          <path d="M200 -50 C250 200, 400 400, 500 700 C600 950, 800 800, 900 1050" stroke="#F0EAD6" strokeWidth="0.8" fill="none"/>
          <path d="M700 -50 C750 200, 900 300, 950 600 C1000 900, 1100 700, 1200 1000" stroke="#F0EAD6" strokeWidth="0.6" fill="none"/>
          <path d="M-100 200 C300 350, 500 150, 900 300 C1200 430, 1400 200, 1600 350" stroke="#F0EAD6" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-10 py-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.45em] uppercase text-[#c8bfa8] mb-6 opacity-0 translate-y-5 animate-fade-up animation-delay-300">
            <span className="flex-1 max-w-12.5 h-px bg-[#c8bfa8] opacity-50"></span>
            Craftora Atelier · Est. 2026
          </div>
          
          <h1 className="font-['Cinzel'] text-[clamp(2.2rem,5vw,5.5rem)] font-normal leading-[1.05] text-[#F0EAD6] tracking-[0.02em] opacity-0 translate-y-7.5 animate-fade-up animation-delay-500">
            Crafted<br/>
            <em className="font-['Cormorant'] italic font-light text-[1.1em] text-[#c8bfa8]">with intention,</em><br/>
            given with love
          </h1>
          
          <div className="w-15 h-px bg-gradient-to-r from-[#c8bfa8] to-transparent my-8 opacity-0 animate-fade-up animation-delay-750" />
          
          <p className="text-[1.05rem] leading-[1.9] font-light text-[rgba(240,234,214,0.65)] max-w-105 opacity-0 animate-fade-up animation-delay-900">
            We create heirloom-quality handcrafted pieces for life's most meaningful moments — weddings, anniversaries, and every celebration in between.
          </p>
          
          <div className="flex items-center gap-6 mt-10 opacity-0 animate-fade-up animation-delay-1100">
            <a 
              href="#collections" 
              className="inline-flex items-center gap-2.5 px-8 py-[0.9rem] font-['Cinzel'] text-[0.7rem] tracking-[0.25em] uppercase text-[#6B1212] bg-[#F0EAD6] border-none transition-all duration-300 hover:bg-[#e8dfc7] hover:-translate-y-0.5 no-underline"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              onClick={(e) => { e.preventDefault(); scrollToSection('collections'); }}
            >
              Explore Collections
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a 
              href="#process" 
              className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.2em] uppercase text-[rgba(240,234,214,0.65)] no-underline transition-colors duration-300 border-b border-[rgba(240,234,214,0.25)] pb-0.5 hover:text-[#F0EAD6] hover:border-[rgba(240,234,214,0.6)]"
              onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}
            >
              Our Process
            </a>
          </div>
        </div>

        <div className="hidden lg:flex relative justify-center items-center opacity-0 animate-fade-up animation-delay-600">
          <div className="relative w-[min(500px,80vw)] animate-float">
            <div className="w-full pt-[120%] border border-[rgba(240,234,214,0.2)] relative overflow-hidden before:content-[''] before:absolute before:inset-2 before:border before:border-[rgba(240,234,214,0.1)]">
              <span className="absolute w-5 h-5 border-[rgba(240,234,214,0.5)] border-t-2 border-l-2 -top-px -left-px"></span>
              <span className="absolute w-5 h-5 border-[rgba(240,234,214,0.5)] border-t-2 border-r-2 -top-px -right-px"></span>
              <span className="absolute w-5 h-5 border-[rgba(240,234,214,0.5)] border-b-2 border-l-2 -bottom-px -left-px"></span>
              <span className="absolute w-5 h-5 border-[rgba(240,234,214,0.5)] border-b-2 border-r-2 -bottom-px -right-px"></span>
              
              {/* Flower Image */}
              <img 
                src="/images/flower" 
                alt="Decorative flower" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-12 bottom-[25%] bg-[rgba(74,13,13,0.9)] border border-[rgba(240,234,214,0.2)] backdrop-blur-md px-5 py-[0.8rem]">
            <div className="font-['Cinzel'] text-[1.8rem] font-semibold text-[#F0EAD6] leading-none">1.2k+</div>
            <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[#c8bfa8] mt-0.5">Pieces Created</div>
          </div>
          
          <div className="absolute -right-8 top-[20%] bg-[rgba(74,13,13,0.9)] border border-[rgba(240,234,214,0.2)] backdrop-blur-md px-5 py-[0.8rem]">
            <div className="font-['Cinzel'] text-[1.8rem] font-semibold text-[#F0EAD6] leading-none">98%</div>
            <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[#c8bfa8] mt-0.5">Happy Clients</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up animation-delay-1400">
        <span className="text-[0.6rem] tracking-[0.4em] uppercase text-[rgba(240,234,214,0.4)]">Scroll</span>
        <span className="w-px h-12.5 bg-gradient-to-b from-[rgba(240,234,214,0.4)] to-transparent animate-scroll-line"></span>
      </div>
    </section>
  );
};

export default HeroSection;