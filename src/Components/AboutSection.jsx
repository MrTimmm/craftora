import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-32 px-10 bg-[#f7f3eb]" id="about">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative reveal hidden lg:block">
            <div className="w-full pt-[130%] bg-[#6B1212] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:to-[rgba(240,234,214,0.05)]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {/* <svg viewBox="0 0 260 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[85%] opacity-35">
                  <path d="M130 15 C85 30, 30 75, 25 140 C20 205, 55 260, 105 285 C140 300, 180 295, 210 270 C248 240, 268 190, 262 135 C255 78, 220 38, 175 20 C160 13, 145 11, 130 15Z" stroke="#F0EAD6" strokeWidth="2" fill="none"/>
                  <path d="M130 15 C145 60, 165 110, 160 165 C155 220, 132 268, 130 318" stroke="#F0EAD6" strokeWidth="1.2" fill="none" opacity="0.7"/>
                  <path d="M25 140 C70 128, 110 145, 130 165 C152 185, 200 192, 262 175" stroke="#F0EAD6" strokeWidth="1.2" fill="none" opacity="0.6"/>
                  <path d="M35 205 C75 190, 112 200, 138 215 C162 228, 205 232, 255 220" stroke="#F0EAD6" strokeWidth="1" fill="none" opacity="0.45"/>
                  <path d="M50 88 C88 105, 115 100, 130 88 C148 76, 178 72, 215 85" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.4"/>
                  <circle cx="130" cy="165" r="10" stroke="#F0EAD6" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <circle cx="130" cy="165" r="28" stroke="#F0EAD6" strokeWidth="0.7" fill="none" opacity="0.3"/>
                  <circle cx="130" cy="165" r="55" stroke="#F0EAD6" strokeWidth="0.4" fill="none" opacity="0.15"/>
                  <path d="M55 50 C80 80, 110 90, 130 80" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.3"/>
                  <path d="M175 245 C195 225, 220 215, 240 220" stroke="#F0EAD6" strokeWidth="0.8" fill="none" opacity="0.3"/>
                </svg> */}


                <img src="/images/flower1.jpeg" className='w-full' alt="" />
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border border-[rgba(139,26,26,0.3)] pointer-events-none z-10 before:content-[''] before:absolute before:inset-2 before:border before:border-[rgba(139,26,26,0.15)]" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5 reveal">
              <span className="w-10 h-px bg-[#8B1A1A] opacity-50"></span>
              <span className="text-[0.65rem] tracking-[0.45em] uppercase text-[#8B1A1A]">Our Story</span>
            </div>
            
            <h2 className="font-['Cinzel'] text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-[#6B1212] tracking-[0.02em] reveal reveal-delay-1">
              Art born from<br/><em className="font-['Cormorant'] italic font-light text-[#8B1A1A]">a deep love</em><br/>of craft
            </h2>
            
            <p className="text-[1.08rem] leading-8 font-light text-[#5a3535] mt-6 reveal reveal-delay-2">
              Craftora Atelier was born from a simple belief: the most meaningful gifts are the ones made with intention. Founded in 2018, we are a boutique studio specialising in handcrafted pieces that carry the weight of emotion and the beauty of natural materials.
            </p>
            
            <p className="text-[1.08rem] leading-8 font-light text-[#5a3535] mb-0 reveal reveal-delay-2">
              Every piece that leaves our atelier is touched by human hands, shaped by years of practice, and finished with the kind of care that only comes when you genuinely love what you do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 reveal reveal-delay-3">
              <div className="p-5 border-l-2 border-[#8B1A1A] bg-[rgba(139,26,26,0.04)]">
                <div className="font-['Cinzel'] text-[0.75rem] tracking-[0.2em] uppercase text-[#6B1212] mb-1">Handmade Always</div>
                <div className="text-[0.88rem] leading-7 text-[#5a3535]">No machines, no shortcuts. Every piece is made by hand from start to finish.</div>
              </div>
              <div className="p-5 border-l-2 border-[#8B1A1A] bg-[rgba(139,26,26,0.04)]">
                <div className="font-['Cinzel'] text-[0.75rem] tracking-[0.2em] uppercase text-[#6B1212] mb-1">Natural Materials</div>
                <div className="text-[0.88rem] leading-7 text-[#5a3535]">We source only the finest sustainable, natural materials for lasting beauty.</div>
              </div>
              <div className="p-5 border-l-2 border-[#8B1A1A] bg-[rgba(139,26,26,0.04)]">
                <div className="font-['Cinzel'] text-[0.75rem] tracking-[0.2em] uppercase text-[#6B1212] mb-1">Bespoke Orders</div>
                <div className="text-[0.88rem] leading-7 text-[#5a3535]">Custom commissions welcome. Your vision, our craftsmanship.</div>
              </div>
              <div className="p-5 border-l-2 border-[#8B1A1A] bg-[rgba(139,26,26,0.04)]">
                <div className="font-['Cinzel'] text-[0.75rem] tracking-[0.2em] uppercase text-[#6B1212] mb-1">Slow Making</div>
                <div className="text-[0.88rem] leading-7 text-[#5a3535]">We take our time. Quality over speed, always.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;