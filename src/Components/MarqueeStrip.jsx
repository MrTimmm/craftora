import React from 'react';

const MarqueeStrip = () => {
  return (
    <div className="bg-[#F0EAD6] py-4 overflow-hidden border-t border-[#e8dfc7] border-b border-[#e8dfc7]" aria-hidden="true">
      <div className="flex gap-0 whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            <span className="inline-flex items-center gap-6 px-8 font-['Cinzel'] text-[0.65rem] tracking-[0.3em] uppercase text-[#6B1212] shrink-0">
              Handcrafted with Care <span className="w-1.25 h-1.25 rounded-full bg-[#8B1A1A] opacity-40"></span>
            </span>
            <span className="inline-flex items-center gap-6 px-8 font-['Cinzel'] text-[0.65rem] tracking-[0.3em] uppercase text-[#6B1212] shrink-0">
              Bespoke Creations <span className="w-1.25 h-1.25 rounded-full bg-[#8B1A1A] opacity-40"></span>
            </span>
            <span className="inline-flex items-center gap-6 px-8 font-['Cinzel'] text-[0.65rem] tracking-[0.3em] uppercase text-[#6B1212] shrink-0">
              Heirloom Quality <span className="w-1.25 h-1.25 rounded-full bg-[#8B1A1A] opacity-40"></span>
            </span>
            <span className="inline-flex items-center gap-6 px-8 font-['Cinzel'] text-[0.65rem] tracking-[0.3em] uppercase text-[#6B1212] shrink-0">
              Made to Order <span className="w-1.25 h-1.25 rounded-full bg-[#8B1A1A] opacity-40"></span>
            </span>
            <span className="inline-flex items-center gap-6 px-8 font-['Cinzel'] text-[0.65rem] tracking-[0.3em] uppercase text-[#6B1212] shrink-0">
              With Love For Love <span className="w-1.25 h-1.25 rounded-full bg-[#8B1A1A] opacity-40"></span>
            </span>
            <span className="inline-flex items-center gap-6 px-8 font-['Cinzel'] text-[0.65rem] tracking-[0.3em] uppercase text-[#6B1212] shrink-0">
              Artisan Studio <span className="w-1.25 h-1.25 rounded-full bg-[#8B1A1A] opacity-40"></span>
            </span>
            <span className="inline-flex items-center gap-6 px-8 font-['Cinzel'] text-[0.65rem] tracking-[0.3em] uppercase text-[#6B1212] shrink-0">
              Natural Materials <span className="w-1.25 h-1.25 rounded-full bg-[#8B1A1A] opacity-40"></span>
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;